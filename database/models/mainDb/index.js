const mainDbSequelizeInstance = require('../../connection/mainDb');

/**
 * Syncing MAIN database tables with sequelize
 */
const AtsMenuActivityModel = require('./tables/AtsMenuActivity.model')(
  mainDbSequelizeInstance
);
const KmEmployeeDetailsModel = require('./tables/KmEmployeeDetails.model')(
    mainDbSequelizeInstance
);
const KmEmployeePersonalDetailsModel = require('./tables/KmEmployeePersonalDetails.model')(
    mainDbSequelizeInstance
);
const KmOrgDetailsModel = require('./tables/KmOrgDetails.model')(
  mainDbSequelizeInstance
);
const KmUserDetailsModel = require('./tables/KmUserDetails.model')(
  mainDbSequelizeInstance
);

const AtsRoleDataVisibility = require('./tables/AtsMenuActivity.model')(
  mainDbSequelizeInstance
);

module.exports = {
  mainDbSequelizeInstance,
  AtsMenuActivityModel,
  KmEmployeeDetailsModel,
  KmEmployeePersonalDetailsModel,
  KmOrgDetailsModel,
  KmUserDetailsModel,
  AtsRoleDataVisibility,
};
