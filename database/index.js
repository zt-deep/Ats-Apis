const FILE_NAME = 'modelIndex.js';
const logger = require('../logger')(FILE_NAME);
const accountsDbSequilizeInstance = require('./connection/accountsDb');
const mainDbSequilizeInstance = require('./connection/mainDb');

const accountModels = {}; 
const mainDbModels = {};
accountModels.sequelize = accountsDbSequilizeInstance;
mainDbModels.sequelize = mainDbSequilizeInstance;

/**
 * Syncing ACCOUNTS database tables with sequelize
 */
accountModels.AppMenuMasterModel = 
  require('./models/accountsDb/AppMenuMaster')(accountsDbSequilizeInstance);
accountModels.OrgAppMenuMappingModel = 
  require('./models/accountsDb/OrgAppMenuMapping')(accountsDbSequilizeInstance);
accountModels.OrgUserAppMenuMapping = 
  require('./models/accountsDb/OrgUserAppMenuMapping')(accountsDbSequilizeInstance);
accountModels.OrgRoleMenuMapping =
  require('./models/accountsDb/OrgRoleMenuMapping')(accountsDbSequilizeInstance);

/**
 * Syncing MAIN database tables with sequelize
 */
mainDbModels.AtsMenuActivityModel = 
  require('./models/mainDb/AtsMenuActivity')(mainDbSequilizeInstance);
mainDbModels.KmEmployeeDetailsModel = 
  require('./models/mainDb/KmEmployeeDetails')(mainDbSequilizeInstance);
mainDbModels.KmEmployeePersonalDetailsModel =
  require('./models/mainDb/KmEmployeePersonalDetails')(mainDbSequilizeInstance);
mainDbModels.KmOrgDetailsModel = require('./models/mainDb/KmOrgDetails')(
  mainDbSequilizeInstance
);
mainDbModels.KmUserDetailsModel = require('./models/mainDb/KmUserDetails')(
  mainDbSequilizeInstance
);


accountModels.sequelize.sync({ force: false }).then(() => {
  logger.info('Accounts database is connected');
});

mainDbModels.sequelize.sync({ force: false }).then(() => {
  logger.info('Main database is connected');
});

module.exports = {accountModels, mainDbModels};