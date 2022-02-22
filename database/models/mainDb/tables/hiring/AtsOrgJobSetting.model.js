const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_ORG_JOB_SETTING,
    {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      JOB_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      PURCHASED_LANGUAGE: {
        type: Sequelize.STRING(265),
        allowNull: false,
      },
      ZIP_CODE: {
        type: Sequelize.STRING(65),
        allowNull: false,
      },
      IN_REVIEW: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: '[]'
      },
      INTERVIEW: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: '[]'
      },
      JOBS_PREFIX: {
        type: Sequelize.CHAR(15),
      },
      OFFERED: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: '[]'
      },
      offer_approval: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue:0
      },
      approved_by: {
        type: Sequelize.STRING(255),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue:0
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_ORG_JOB_SETTING,
      freezeTableName: true,
    }
  );
