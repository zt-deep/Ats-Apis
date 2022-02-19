const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_JOB_MAPPING,
    {
      ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      CANDIDATE_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      JOB_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      PREV_STATUS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      MAPPING_STATUS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      HIRING_DATE: {
        type: Sequelize.DATE,
      },
      SOURCE: {
        type: Sequelize.INTEGER,
      },
      job_rating: {
        type: Sequelize.STRING(255),
      },
      OFFER_APPROVED: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      REVIEW_STATUS: {
        type: Sequelize.TINYINT,
      },
      CTC: {
        type: Sequelize.DOUBLE,
      },
      CURRENT_CTC: {
        type: Sequelize.FLOAT,
      },
      POSITION_BUDGET: {
        type: Sequelize.STRING(255),
      },
      HIKE: {
        type: Sequelize.FLOAT,
      },
      REMARK: {
        type: Sequelize.STRING(200),
      },
      SALARY_STRACTURE: {
        type: Sequelize.INTEGER,
      },
      STEP: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      STEP_STATUS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      SEND_LINK_STATUS: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      SENSELOAF_SCORE: {
        type: Sequelize.FLOAT().UNSIGNED,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER,
      },
      CREATED_AT: {
        type: Sequelize.DATE,
      },
      UPDATED_BY: {
        type: Sequelize.INTEGER,
      },
      UPDATED_AT: {
        type: Sequelize.DATE,
      },
      REJECTED_DATE: {
        type: Sequelize.DATE,
      },
      OFFER_STATUS: {
        type: Sequelize.TINYINT,
      },
    },
    {
      createdAt: 'CREATED_AT',
      updatedAt: 'UPDATED_AT',
      underscore: true,
      tablename: mainDb.ATS_JOB_MAPPING,
      freezeTableName: true,
    }
  );
