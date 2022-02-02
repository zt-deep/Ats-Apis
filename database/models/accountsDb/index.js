const accountsDbSequilizeInstance = require('../../connection/accountsDb');

/**
 * Syncing ACCOUNTS database tables with sequelize
 */
const AppMenuMasterModel = require('./tables/AppMenuMaster.model')(
  accountsDbSequilizeInstance
);
const OrgAppMenuMappingModel = require('./tables/OrgAppMenuMapping.model')(
  accountsDbSequilizeInstance
);
const OrgUserAppMenuMapping = require('./tables/OrgUserAppMenuMapping.model')(
  accountsDbSequilizeInstance
);
const OrgRoleMenuMapping = require('./tables/OrgRoleMenuMapping.model')(
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
  OrgRoleMenuMapping,
  OrgUserAppMenuMapping,
  SessionsModel,
  SessionsHistoriesModel,
};
