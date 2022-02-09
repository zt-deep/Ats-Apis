const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_JOB_REJECTION,
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
      REJECTION_REASON: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(10).UNSIGNED,
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
      createdAt: 'CREATED_AT',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_JOB_REJECTION,
      freezeTableName: true,
    }
  );
