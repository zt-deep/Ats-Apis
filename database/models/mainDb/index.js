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

const AtsRoleDataVisibilityModel = require('./tables/AtsMenuActivity.model')(
  mainDbSequelizeInstance
);

const AtsJobModel = require('./tables/AtsJob.model')(
  mainDbSequelizeInstance
);

const AtsJobMappingModel = require('./tables/AtsJobMapping.model')(
  mainDbSequelizeInstance
);

const AtsHiringTeamModel = require('./tables/AtsHiringTeam.model')(
  mainDbSequelizeInstance
);

const AtsMasterJobBoardsModel = require('./tables/AtsMasterJobBoards.model')(
  mainDbSequelizeInstance
);

const AtsJobBoardsModel = require('./tables/AtsJobBoards.model')(
  mainDbSequelizeInstance
);


module.exports = {
  mainDbSequelizeInstance,
  AtsMenuActivityModel,
  KmEmployeeDetailsModel,
  KmEmployeePersonalDetailsModel,
  KmOrgDetailsModel,
  KmUserDetailsModel,
  AtsRoleDataVisibilityModel,
  AtsJobModel,
  AtsJobMappingModel,
  AtsHiringTeamModel,
  AtsMasterJobBoardsModel,
  AtsJobBoardsModel,
};
