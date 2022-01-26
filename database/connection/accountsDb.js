const Sequelize = require('sequelize');
const { database, dialect, host, password, username } =
  require('../../config/config.json').development.accounts;

const accountsDb = new Sequelize(database, username, password, {
  host,
  dialect,
  operatorsAliases: false,
  logging:false
});

module.exports = accountsDb;
global.sequelize = accountsDb;
