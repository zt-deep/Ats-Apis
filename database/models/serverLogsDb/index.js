const serverLogsDbSequelizeInstance = require('../../connection/serverLogsDb');

/**
 * Syncing Server Logs database tables with sequelize
 */
const ApiErrorLogModel = require('./tables/ApiErrorLog.model')(
  serverLogsDbSequelizeInstance
);

const ApiMysqlErrorLogModel = require('./tables/ApiMysqlErrorLogs.model')(
  serverLogsDbSequelizeInstance
);

module.exports = {
    serverLogsDbSequelizeInstance,
    ApiErrorLogModel,
    ApiMysqlErrorLogModel
}