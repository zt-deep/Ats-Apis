const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.KM_ORG_DETAILS,
    {
      ORG_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_NAME: {
        type: Sequelize.STRING(150),
      },
      TIMEZOME_ID: {
        type: Sequelize.INTEGER(11),
      },
      CURRENCY_ID: {
        type: Sequelize.TINYINT(4),
      },
      LANGUAGE_ID: {
        type: Sequelize.TINYINT(4),
      },
      PRODUCT_THEME_COLOR: {
        type: Sequelize.STRING(10),
      },
      LEGAL_NAME: {
        type: Sequelize.STRING(150),
      },
      ORG_INDUSTRY: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      MOBILE_NUMBER: {
        type: Sequelize.STRING(65),
      },
      ORG_ADDRESS: {
        type: Sequelize.STRING(150),
      },
      ORG_ADDRESS2: {
        type: Sequelize.STRING(150),
      },
      ORG_LOCALITY: {
        type: Sequelize.STRING(150),
      },
      ORG_CITY: {
        type: Sequelize.INTEGER(11),
      },
      ORG_STATE: {
        type: Sequelize.INTEGER(11),
      },
      ORG_COUNTRY: {
        type: Sequelize.INTEGER(11),
      },
      ORG_ZIP_CODE: {
        type: Sequelize.INTEGER(11),
      },
      ORG_TYPE: {
        type: Sequelize.INTEGER(5).UNSIGNED,
      },
      ORG_LOGO: {
        type: Sequelize.STRING(500),
      },
      ORG_DOMAIN: {
        type: Sequelize.STRING(50),
      },
      PARENT_ORG_ID: {
        type: Sequelize.INTEGER(11),
      },
      PAYMENT: {
        type: Sequelize.STRING(65),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
      LAST_MODIFIED_BY: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      LAST_MODIFIED_ON: {
        type: Sequelize.DATE,
      },
      ORG_FIRST_AGREEMENT_DATE: {
        type: Sequelize.DATE,
      },
      ORG_STATUS: {
        type: Sequelize.TINYINT(4),
      },
      ORG_VERIFIED: {
        type: Sequelize.TINYINT(2),
        allowNull: false,
      },
      ORG_SEARCH: {
        type: Sequelize.TINYINT(2),
        allowNull: false,
      },
      IS_NOTIFICATION: {
        type: Sequelize.TINYINT(2),
      },
      TRAIL_START_DATE: {
        type: Sequelize.DATE,
      },
      TRAIL_END_DATE: {
        type: Sequelize.DATE,
      },
      IS_TRAIL: {
        type: Sequelize.INTEGER(2),
      },
      WORKING_YEAR: {
        type: Sequelize.TINYINT(4),
      },
      WORKING_DAYS: {
        type: Sequelize.TINYINT(4),
      },
      PAYROLL_DEFAULT_CONFIG: {
        type: Sequelize.TINYINT(4),
        allowNull: false,
      },
      IS_ORG_BLOCKED: {
        type: Sequelize.TINYINT(4).UNSIGNED,
        allowNull: false,
      },
      FROM_EMAIL: {
        type: Sequelize.STRING(255),
      },
      EMPLOYEE_CODE_PREFIX: {
        type: Sequelize.STRING(45),
      },
      DEFAULT_START_CODE: {
        type: Sequelize.INTEGER(10),
      },
      TEMP_CODE_NUMBER: {
        type: Sequelize.INTEGER(11),
      },
      FROM_EMAIL_NAME: {
        type: Sequelize.STRING(200),
      },
      V2_LOGIN: {
        type: Sequelize.TINYINT(4),
      },
      ALL_DETAILS: {
        type: Sequelize.TEXT,
      },
      ORG_CODE: {
        type: Sequelize.STRING(65),
      },
      PAYOUT_ID: {
        type: Sequelize.STRING(100),
      },
      PAYOUT_KIT_NO: {
        type: Sequelize.STRING(100),
      },
      PAYOUT_REG_INFO: {
        type: Sequelize.JSON,
      },
      PAYOUT_WITHDRAWAL_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      ORG_ZIM_ID: {
        type: Sequelize.STRING(15),
      },
      SPOC_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.KM_ORG_DETAILS,
      freezeTableName: true,
    }
  );
