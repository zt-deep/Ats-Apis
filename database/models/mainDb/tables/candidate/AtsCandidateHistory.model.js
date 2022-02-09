const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_HISTORY,
    {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(11),
      },
      CANDIDATE_ID: {
        type: Sequelize.INTEGER(11),
      },
      JOB_ID: {
        type: Sequelize.INTEGER(11),
      },
      /**
       *  0 - New
       *  1,2 - In Review
       *  3 - Offered
       *  4 - hired
       *  5 - Rejected
       *  6 - Withdraw
       *  7 - Remove from job
       *  8 - Update notes
       *  9 - Rating
       *  10 - profile Update
       *  11 - Hiring Date
       *  12 - Job Created
       *  13 - Hiring Team
       *  19 - On Hold
       */
      ACTION_TYPE: {
        type: Sequelize.TINYINT(4),
        allowNull: false,
        defaultValue: 1,
      },
      REMARKS: {
        type: Sequelize.STRING(1000),
      },
      ATTACHMENT: {
        type: Sequelize.STRING(200),
      },
      /**
       * Card id in case of review
       */
      ROLE_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      rating: {
        type: Sequelize.STRING(255),
      },
      RATING_TYPE: {
        type: Sequelize.TINYINT(4),
        allowNull: false,
      },
      STATUS: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      STATUS_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      STAGE_NAME: {
        type: Sequelize.STRING(100),
      },
      STAGE_ID: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      CREATED_AT: {
        type: Sequelize.DATE,
        allowNull: false
      },
    },
    {
      createdAt: 'CREATED_AT',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_HISTORY,
      freezeTableName: true,
    }
  );
