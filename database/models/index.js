const FILE_NAME = 'modelIndex.js';
const logger = require('../../logger')(FILE_NAME);
const accountsDbSequilizeInstance = require('../connection/accountsDb');
const mainDbSequilizeInstance = require('../connection/mainDb');

const accountModels = {}; 
const mainDbModels = {};
accountModels.sequelize = accountsDbSequilizeInstance;
mainDbModels.sequelize = mainDbSequilizeInstance;

// Syncing accounts database tables with sequelize
accountModels.AppMenuMasterModel = 
  require('./accountsDb/AppMenuMaster')(accountsDbSequilizeInstance);
accountModels.OrgAppMenuMappingModel = 
  require('./accountsDb/OrgAppMenuMapping')(accountsDbSequilizeInstance);
accountModels.OrgUserAppMenuMapping = 
  require('./accountsDb/OrgUserAppMenuMapping')(accountsDbSequilizeInstance);
accountModels.OrgRoleMenuMapping =
  require('./accountsDb/OrgRoleMenuMapping')(accountsDbSequilizeInstance);

// Syncing main database tables with sequelize
mainDbModels.AtsMenuActivity = 
  require('./mainDb/AtsMenuActivity')(mainDbSequilizeInstance);


accountModels.sequelize.sync({ force: false }).then(() => {
  logger.info('Accounts database is connected');
});

mainDbModels.sequelize.sync({ force: false }).then(() => {
  logger.info('Main database is connected');
});

module.exports = {accountModels, mainDbModels};