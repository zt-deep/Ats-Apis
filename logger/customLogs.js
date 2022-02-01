const FILE_NAME = 'customLogs';
const { ApiErrorLogModel, ApiMysqlErrorLogModel } = require('../database/models/serverLogsDb/index');
const { ZIMYO_ATS_APP_ID } = require('../config/Constants');
const logger = require('./index')(FILE_NAME);

const Logs = {

	/**
	 * 
	 * @param {*} data Payload for mysql error to insert in db
	 * @param {*} callback 
	 */
  logMysqlError: async (error, req, callback) => {
    try {
      const { code, errno, sqlMessage, sqlState, sql, stack } = error;
      let orgId; let userId;
      if(Object.prototype.hasOwnProperty.call(req, 'auth') && req.auth){
        orgId = req.auth.org_id || null;
        userId = req.auth.user_id || null;
      }else if(Object.prototype.hasOwnProperty.call(req, 'decoded') && req.decoded){
        orgId = req.decoded.org_id || null;
        userId = req.decoded.org_id || null;
      }
      const logData = {
        app_id: ZIMYO_ATS_APP_ID,
        org_id: orgId,
        user_id: userId,
        url: (`${req.protocol  }://${  req.get('host')  }${req.originalUrl}`).split(
          '?'
        )[0],
        code,
        errno,
        sql_message: sqlMessage,
        sql_state: sqlState,
        sql,
        err_stack: stack,
      };
      const logResponse = await ApiMysqlErrorLogModel.create(logData);
      callback(false, logResponse);
    } catch (err) {
      logger.error(err);
      callback(err);
    }
  },

	/**
	 * 
	 * @param {*} data Payload for api error to insert in db
	 * @param {*} callback 
	 */
  logApiError: async (error, req, callback) => {
    try {
      const { code, message, stack } = error;
      let orgId;
      let userId;
      if (Object.prototype.hasOwnProperty.call(req, 'auth') && req.auth) {
        orgId = req.auth.org_id || null;
        userId = req.auth.user_id || null;
      } else if ( Object.prototype.hasOwnProperty.call(req, 'decoded') && req.decoded){
        orgId = req.decoded.org_id || null;
        userId = req.decoded.org_id || null;
      }
      const logData = {
        app_id: ZIMYO_ATS_APP_ID,
        org_id: orgId,
        user_id: userId,
        url: `${req.protocol}://${req.get('host')}${req.originalUrl}`.split(
          '?'
        )[0],
        code,
        error_class: error.constructor.name,
        message,
        err_stack: stack,
      };
      const logResponse = await ApiErrorLogModel.create(logData);
      callback(false, logResponse);
    } catch (err) {
      logger.error(err);
      callback(err);
    }
  },
};

module.exports = Logs;
