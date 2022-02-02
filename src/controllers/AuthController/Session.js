const FILE_NAME = 'Session.js';
const useragent = require('useragent');
const logger = require('../../../logger/index')(FILE_NAME);
const {
  SessionsModel,
  SessionsHistoriesModel,
} = require('../../../database/models/accountsDb/index');
const {
  generateJwtToken,
  verifyJwtToken,
} = require('../../../lib/common/jwtToken');
const {
  getIpv4Address,
  promiseErrorCatchFunction,
  dateDifferenceToString,
  getCurrentDate,
} = require('../../../lib/common/Util');

const destroySession = async (token) => {
  try {
    let promiseArray = [];
    promiseArray.push(verifyJwtToken(token).catch(promiseErrorCatchFunction));
    promiseArray.push(
      SessionsModel.findByPk(token).catch(promiseErrorCatchFunction)
    );
    const [tokenMetaData, sessionData] = await Promise.all(promiseArray);
    if (!tokenMetaData) {
      logger.debug(`Verification failed for token: ${token}`);
      return false;
    }
    if (tokenMetaData.promiseError) {
      logger.error(tokenMetaData.promiseError);
      return false;
    }
    if (sessionData && sessionData.user_id) {
      let insertSessionHistoryData = {};
      const currentTimeStampInSeconds = Math.round(new Date() / 1000);
      const logOutTime =
        parseInt(sessionData.expires, 10) < currentTimeStampInSeconds
          ? new Date(sessionData.expires * 1000)
          : getCurrentDate();
      delete sessionData.id;
      delete sessionData.data;
      delete sessionData.expires;
      delete sessionData.updated_on;
      delete sessionData.auth_updated_at;
      sessionData.referer = sessionData.service;
      const agent = useragent.parse(sessionData.user_agent);
      sessionData.service = tokenMetaData.service;
      sessionData.os = agent.os.family;
      sessionData.device = agent.device.family;
      sessionData.family = agent.family;
      sessionData.duration = dateDifferenceToString(
        logOutTime,
        sessionData.loggedin,
        'S'
      );
      insertSessionHistoryData = { ...sessionData };
      promiseArray = [
        SessionsModel.destroy(),
        SessionsHistoriesModel.create(insertSessionHistoryData),
      ];
      await Promise.all(promiseArray);
      return true;
    }

    return false;
  } catch (error) {
    logger.error(error);
    throw new Error(error);
  }
};
/**
 * Stores Session and Returns Token
 * @param {*} req Incoming Client Request
 * @param {*} callback
 */
const createSession = async (req, callback) => {
  try {
    // Fetching Ipv4 address for the client
    let currentIp = getIpv4Address(req.connection.remoteAddress);
    if (req.headers.refer_addr !== undefined) {
      currentIp = req.headers.refer_addr;
    }

    // Device type
    const userAgent = req.params.svc === 'HRMS_MOBILE' ? 'Mobile' : 'Web';
    const data = {
      callback_url: req.params.cb_url || req.headers.referer || '',
      service: req.params.svc || 'Account',
      remote_addr: currentIp,
      device: userAgent,
    };

    // Generating JWT token
    const { error: err, data: token } = await generateJwtToken(data);
    if (err) throw new Error(err);

    const sessionData = {
      id: token,
      service: req.headers.referer || '',
      expires: Math.round(
        new Date() / 1000 + process.env.TOKEN_EXPIRES_IN * 60
      ),
      user_agent: req.headers['user-agent'],
      remote_addr: data.remote_addr,
    };

    // Storing Session in database
    await SessionsModel.create(sessionData);
    callback(false, token);
  } catch (error) {
    logger.error(error);
    callback(error);
  }
};

const validateToken = async (req, next) => {
  try {
    let bearerToken = [];
    const errorMessage = 'Your Session Is Expired. Kindly Relogin.';
    if (Object.prototype.hasOwnProperty.call(req.headers, 'authorization')) {
      bearerToken = req.headers.authorization.split(' ');
      if (bearerToken.length !== 2 && bearerToken[1] && bearerToken[1] === '')
        throw new Error('Unauthorized access.');
      const [, token] = bearerToken;
      const verifyTokenPromise = verifyJwtToken(token).catch(
        promiseErrorCatchFunction
      );
      const getSessionDataPromise = SessionsModel.findByPk(token).catch(
        promiseErrorCatchFunction
      );
      const [tokenMetaData, sessionData] = await Promise.all([
        verifyTokenPromise,
        getSessionDataPromise,
      ]);
      if (!sessionData || !tokenMetaData) throw new Error(errorMessage);
      if (sessionData.promiseError || tokenMetaData.promiseError) {
        logger.warn(sessionData.promiseError);
        throw new Error(errorMessage);
      }
      const { expires } = sessionData;
      const currentTimestampInSeconds = Math.floor(Date.now() / 1000);
      if (tokenMetaData.serviceAgent !== 'HRMS_MOBILE') {
        if (parseInt(expires, 10) < currentTimestampInSeconds) {
          await destroySession(token);
          throw new Error(errorMessage);
        }
      } else if (expires > 0) {
        if (
          parseInt(expires, 10) + 604800 - process.env.TOKEN_EXPIRES_IN * 60 <
          currentTimestampInSeconds
        ) {
          await destroySession();
          throw new Error(errorMessage);
        }
      }

      sessionData.expires =
        currentTimestampInSeconds + process.env.TOKEN_EXPIRES_IN * 60;

      const response = await sessionData.save();
      if(response)
        next();
      else {
        logger.warn(`Not able to update the session for token: ${token}`);
        next(new Error(`Not able to update the session for token: ${token}`));
      }
    } else {
      throw new Error('Unauthorized access.');
    }
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

module.exports = {
  createSession,
  validateToken,
};
