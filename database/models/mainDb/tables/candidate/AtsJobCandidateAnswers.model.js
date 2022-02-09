const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_JOB_CANDIDATE_ANSWERS,
    {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      JOB_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      CANDIDATE_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      QUESTION_ANSWER: {
        type: Sequelize.JSON,
      },
      /**
       *  1 - deleted
       *  0 - active
       */
      DELETE_STATUS: {
        type: Sequelize.TINYINT(4),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
      },
      CREATED_AT: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_JOB_CANDIDATE_ANSWERS,
      freezeTableName: true,
    }
  );
