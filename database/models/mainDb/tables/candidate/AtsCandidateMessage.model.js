const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_MESSAGE,
    {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(11).UNSIGNED,
      },
      JOB_ID: {
        type: Sequelize.INTEGER(11),
      },
      CID: {
        type: Sequelize.INTEGER(11),
      },
      TEMPLATE: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      USER_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      SUBJECT: {
        type: Sequelize.STRING(100),
      },
      CONTENT: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ATTACHED_FILE: {
        type: Sequelize.STRING(255),
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      /**
       *  1 - For generic
       *  2 - For Reject
       *  3 - Offer
       *  4 - Interview
       */
      MAIL_TYPE: {
        type: Sequelize.TINYINT(2),
      },
      /**
       *  1 - Yes
       *  2 - No
       */
      REJECTION_EMAIL: {
        type: Sequelize.TINYINT(2),
      },
    },
    {
      createdAt: 'CREATED_ON',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_MESSAGE,
      freezeTableName: true,
    }
  );
