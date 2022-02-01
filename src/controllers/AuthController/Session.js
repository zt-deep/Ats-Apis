const FILE_NAME = 'Session.js';
const logger = require("../../../logger/index")(FILE_NAME);
const { SessionsModel } = require('../../../database/models/accountsDb/index');
const {generateJwtToken} = require("../../../lib/common/jwtToken");
const { getIpv4Address } = require("../../../lib/common/Util");

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
        if(err)
            throw new Error(err);
        
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
}



module.exports = {createSession};