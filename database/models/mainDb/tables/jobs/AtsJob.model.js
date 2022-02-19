const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_JOB,
    {
      JOB_ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      UNIQUE_JOB_ID: {
        type: Sequelize.STRING(15),
      },
      NAUKRI_JOB_ID: {
        type: Sequelize.STRING(255),
      },
      REQUISITION_ID: {
        type: Sequelize.INTEGER(),
      },
      ORG_ID: {
        type: Sequelize.INTEGER().UNSIGNED,
      },
      JOB_TITLE: {
        type: Sequelize.STRING(100),
      },
      CITY: {
        type: Sequelize.STRING(100),
      },
      STATE: {
        type: Sequelize.STRING(100),
      },
      STREET_ADDRESS: {
        type: Sequelize.STRING(100),
      },
      JOB_AD_LANGUAGE: {
        type: Sequelize.STRING(65),
      },
      COMPANY_DESCRIPTION: {
        type: Sequelize.TEXT,
      },
      JOB_DESCRIPTION: {
        type: Sequelize.TEXT,
      },
      QUALIFICATION: {
        type: Sequelize.TEXT,
      },
      ADDITION_INFORMATION: {
        type: Sequelize.TEXT,
      },
      VIDEO_LINK: {
        type: Sequelize.STRING(255),
      },
      INDUSTRY: {
        type: Sequelize.INTEGER,
      },
      FUNCTIONAL: {
        type: Sequelize.INTEGER,
      },
      EXPERIENCE_LEVEL: {
        type: Sequelize.INTEGER,
      },
      EMPLOYEMENT: {
        type: Sequelize.STRING(50),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER().UNSIGNED,
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
      JOB_STATUS: {
        type: Sequelize.INTEGER,
      },
      RELEVANT_EXPERIENCE: {
        type: Sequelize.CHAR(15),
      },
      TOTAL_EXPERIENCE: {
        type: Sequelize.CHAR(15),
      },
      UPDATED_BY: {
        type: Sequelize.INTEGER,
      },
      UPDATED_ON: {
        type: Sequelize.DATE,
      },
      DEACTIVATED_ON: {
        type: Sequelize.DATE,
      },
      LOCATION: {
        type: Sequelize.INTEGER,
      },
      DEPARTMENT_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      DESIGNATION_ID: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ENTITY: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      BUSINESS_UNIT: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      NO_OF_POSITION: {
        type: Sequelize.INTEGER,
      },
      SENSELOAF_DOC_ID: {
        type: Sequelize.STRING(255),
      },
      OPEN_TILL_DATE: {
        type: Sequelize.DATE,
      },
      ALL_DETAILS: {
        type: Sequelize.TEXT,
      },
      // 0 - not deleted, 1- deleted, 2-Save as draft
      DELETE_STATUS: {
        type: Sequelize.TINYINT,
      },
    },
    {
      createdAt: 'CREATED_ON',
      updatedAt: 'UPDATED_ON',
      underscore: true,
      tablename: mainDb.ATS_JOB,
      freezeTableName: true,
    }
  );
