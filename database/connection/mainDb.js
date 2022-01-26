const Sequelize = require('sequelize');
const { database, dialect, host, password, username } = require('../../config/config.json').development.mainDb;

const mainDb = new Sequelize(database, username, password, {
    host,
    dialect, 
    operatorsAliases: 0,
    logging: false
});

module.exports = mainDb;
global.sequelize = mainDb;