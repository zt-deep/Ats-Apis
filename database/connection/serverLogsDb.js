const Sequelize = require('sequelize');
const { database, dialect, host, password, username } =
  require('../../config/config.json').development.serverLogs;

const serverLogsDB = new Sequelize(database, username, password, {
  host,
  dialect,
  operatorsAliases: 0,
  logging: false,
});

module.exports = serverLogsDB;
global.sequelize = serverLogsDB;
