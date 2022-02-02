const FILE_NAME = 'databaseIndex.js';
const logger = require('../logger')(FILE_NAME);
const {
  mainDbSequelizeInstance: mainDbModels,
} = require('./models/mainDb/index');

// Importing associations 
// require('./models/mainDb/associations');

const {
  accountsDbSequilizeInstance: accountsDbModels
} = require('./models/accountsDb/index');

const {
  serverLogsDbSequelizeInstance: serverLogsDbModel
} = require('./models/serverLogsDb/index');

accountsDbModels.sync({ force: false }).then(() => {
  logger.info('Accounts database is connected.');
});

mainDbModels.sync({ force: false }).then(() => {
  logger.info('Main database is connected.');
});

serverLogsDbModel.sync({ force: false }).then(() => {
  logger.info('Server Logs database is connected.');
});

module.exports = { accountsDbModels, mainDbModels };