const accountsDbSequilizeInstance = require('../../connection/accountsDb');

/**
 * Syncing ACCOUNTS database tables with sequelize
 */

const AppMasterModel = require('./tables/AppMaster.model')(
  accountsDbSequilizeInstance
);
const AppMenuMasterModel = require('./tables/AppMenuMaster.model')(
  accountsDbSequilizeInstance
);
const OrgAppMenuMappingModel = require('./tables/OrgAppMenuMapping.model')(
  accountsDbSequilizeInstance
);
const OrgUserAppMenuMappingModel = require('./tables/OrgUserAppMenuMapping.model')(
  accountsDbSequilizeInstance
);
const OrgRoleMenuMappingModel = require('./tables/OrgRoleMenuMapping.model')(
  accountsDbSequilizeInstance
);
const SessionsModel = require('./tables/Sessions.model')(
  accountsDbSequilizeInstance
);
const SessionsHistoriesModel = require('./tables/SessionHistories.model')(
  accountsDbSequilizeInstance
);

module.exports = {
  accountsDbSequilizeInstance,
  AppMenuMasterModel,
  OrgAppMenuMappingModel,
  OrgRoleMenuMappingModel,
  OrgUserAppMenuMappingModel,
  SessionsModel,
  SessionsHistoriesModel,
  AppMasterModel,
};
