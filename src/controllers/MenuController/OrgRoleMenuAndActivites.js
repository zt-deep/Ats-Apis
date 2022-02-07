const _ = require('lodash');
const {
  OrgRoleMenuMappingModel,
} = require('../../../database/models/accountsDb');
const { promiseErrorCatchFunction } = require('../../../lib/common/Util');

const FILE_NAME = 'OrgRoleMenuAndActivites';
const logger = require('../../../logger/index')(FILE_NAME);

// Fetching org role menus
const fetchOrgRoleMenus = (orgId) =>
  OrgRoleMenuMappingModel.findAll({
    where: {
      ORG_ID: orgId,
    },
    group: 'ROLE_ID',
    order: [['ID', 'ASC']],
    raw: true,
  }).catch(promiseErrorCatchFunction);

/**
 * 
 * @param {*} auth 
 * @param {*} callback 
 * @returns return the role based menu ids in an organization
 */
const getOrgRoleMenus = async (auth, callback) => {
  try {
    const { org_id: orgId } = auth;
    const orgRoleMenuData= await fetchOrgRoleMenus(orgId);
    const roleMenus = {};
    if(orgRoleMenuData && orgRoleMenuData.length === 0)
      return callback(false, {roleMenus: []});
    
    orgRoleMenuData.map(({ ID, ACTIVITY_ID, MENU_ID, ROLE_ID }) => {
      if(MENU_ID && MENU_ID !== '')
        roleMenus[ROLE_ID] = {
          id: ID,
          menuIds: MENU_ID.split(',').map((id) => _.toNumber(id)),
          activityIds: ACTIVITY_ID.split(',').map((id) => _.toNumber(id)),
        };
        return 0;
    });
    return callback(false, { roleMenuData: roleMenus });
  } catch (error) {
    logger.error(error);
    return callback(error);
  }
};

module.exports = getOrgRoleMenus;
