const FILE_NAME = 'UserMenu.js';
const _ = require('lodash');
const logger = require('../../../logger')(FILE_NAME);
const { ZIMYO_ATS_APP_ID } = require('../../../config/Constants');
const {
  OrgAppMenuMappingModel,
  OrgUserAppMenuMappingModel,
  OrgRoleMenuMappingModel,
  AppMasterModel,
  AppMenuMasterModel
} = require('../../../database/models/accountsDb/index');
const { getHighestRole } = require('../../../lib/common/Util');

// Fetch org menus
const fetchOrgMenus = (orgId) =>
  OrgAppMenuMappingModel.findOne({
    attributes: ['app_menu'],
    include: [
      {
        model: AppMasterModel,
        attributes: ['id', 'base_url'],
      },
    ],
    where: {
      org_id: orgId,
      app_id: ZIMYO_ATS_APP_ID,
    },
    raw: true,
  });

// fetch org role menus
const fetchOrgRoleMenus = (orgId) =>
  OrgRoleMenuMappingModel.findAll({
    where: {
      ORG_ID: orgId,
    },
    group: 'ROLE_ID',
    order: [['ID', 'ASC']],
    raw: true,
  });

// Fetch user based menus
const fetchOrgUserMenus = (orgId, userId) =>
  OrgUserAppMenuMappingModel.findOne({
    where: {
      org_id: orgId,
      app_id: ZIMYO_ATS_APP_ID,
      user_id: userId,
    },
    raw: true,
  });

  // Fetching names of app menu
  const fetchMenuNames = () => 
    AppMenuMasterModel.findAll({
      attributes: ['id','name','parent_id'],
      where: {
        app_id: ZIMYO_ATS_APP_ID,
        status: 'Active'
      },
      raw: true
    })

/**
 * This function will return all the menus and activites assigned to the user
 * @param {*} data body data
 * @param {*} auth authorization data
 * @param {*} callback
 */
const getUserMenuAndActivities = async (data, auth, callback) => {
  try {
    const { org_id: orgId, user_id: userId, role_ids: roleIds } = auth;

    const { isAdmin, highestRole } = getHighestRole(roleIds);
    const menuPromiseArray = [];
    let menuIds = [];
    let activity = [];

    menuPromiseArray.push(fetchMenuNames());
    if (!isAdmin) {
      menuPromiseArray.push(fetchOrgMenus(orgId));
    } else {
      menuPromiseArray.push(fetchOrgMenus(orgId));
      menuPromiseArray.push(fetchOrgRoleMenus(orgId));
      menuPromiseArray.push(fetchOrgUserMenus(orgId, userId));
    }
    

    const [menuNamesData, orgMenusData, orgRoleMenusData, orgUserMenusData] =
      await Promise.all(menuPromiseArray);
    // const
    if (!orgMenusData || orgMenusData.app_menu.length === 0) {
      logger.warn(`Menus for orgID ${orgId} does not exist for ATS`);
      return [];
    }
    if (isAdmin) {
      menuIds = orgMenusData.app_menu;
    } else {
      const orgMenus = orgMenusData.app_menu;
      let userMenus = [];

      // Filtering user based menus
      if (orgUserMenusData && orgUserMenusData.app_menu.length > 0) {
        userMenus = orgUserMenusData.app_menu?.map((id) => _.toNumber(id)) || [];
        activity = orgUserMenusData.activity_menu?.map((id) => _.toNumber(id)) || [];
      }

      // Filtering role based menus
      if (orgRoleMenusData && orgRoleMenusData.length > 0) {
        const roleRow = orgRoleMenusData.find(
          (roleData) => roleData.ROLE_ID === highestRole
        );
        if(userMenus.length === 0)
        userMenus =
          roleRow?.MENU_ID?.split(',').map((id) => _.toNumber(id)) || [];
        if(activity.length === 0)
          activity =
            roleRow?.ACTIVITY_ID?.split(',').map((id) =>
              _.toNumber(id)
            ) || [];
      }
      menuIds = _.intersection(userMenus, orgMenus);
    }
    const menuData = [];
    const subMenuData = [];
    menuIds.map(id => {
      if(id === 0) return 0;
      const menuInfo = menuNamesData.find(menuId => menuId.id === id);
      if(menuInfo.parent_id){
        subMenuData.push({...menuInfo, name: _.capitalize(menuInfo.name)});
      }else{
        menuData.push({ ...menuInfo, name: _.capitalize(menuInfo.name) });
      }
      return 0;
    });
    
    return callback(false, { menu: menuData, subMenu: subMenuData, activity });
  } catch (error) {
    logger.error(error);
    return callback(error);
  }
};

module.exports = getUserMenuAndActivities;
