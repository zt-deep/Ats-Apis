const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_DETAILS,
    {
      ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      FIRST_NAME: {
        type: Sequelize.STRING(65),
      },
      LAST_NAME: {
        type: Sequelize.STRING(65),
      },
      EMAIL: {
        type: Sequelize.STRING(265),
      },
      /**
       *  0 - In Review
       *  1 - Interview
       *  2 - Offered
       *  3 - Hired
       */
      STATUS: {
        type: Sequelize.TINYINT(2),
        allowNull: false,
        defaultValue: 0
      },
      LOCATION: {
        type: Sequelize.STRING(265),
      },
      MOBILE: {
        type: Sequelize.STRING(65),
        allowNull: false,
      },
      WEBSITE: {
        type: Sequelize.STRING(265),
      },
      SOURCE_TYPE: {
        type: Sequelize.STRING(265),
      },
      JOB_ID: {
        type: Sequelize.INTEGER(11),
      },
      STEP: {
        type: Sequelize.TINYINT(2),
      },
      RESUME_FILE: {
        type: Sequelize.STRING(265),
      },
      CANDIDATE_TYPE: {
        type: Sequelize.TINYINT(2),
        defaultValue: 0
      },
      cd_source: {
        type: Sequelize.ENUM,
        values: ['bulk-upload', 'direct-apply', 'org-add', 'naukri-add'],
      },
      /**
       *  0 - No
       *  1 - YES
       */
      DELETE_STATUS: {
        type: Sequelize.TINYINT(2),
        defaultValue: 0
      },
      EMP_NAME: {
        type: Sequelize.STRING(265),
      },
      EMP_ID: {
        type: Sequelize.STRING(265),
      },
      EMP_EMAIL: {
        type: Sequelize.STRING(265),
      },
      SENSELOAF_RESUME_ID: {
        type: Sequelize.STRING(255),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      CREATED_ON: {
        type: Sequelize.DATE,
        allowNull: false
      },
    },
    {
      createdAt: 'CREATED_ON',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_DETAILS,
      freezeTableName: true,
    }
  );
