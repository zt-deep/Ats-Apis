const Sequelize = require('sequelize');
const { mainDb } = require('../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.KM_USER_DETAILS,
    {
      USER_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      IS_ACTIVE_ATS: {
        type: Sequelize.TINYINT(1),
      },
      EMAIL: {
        type: Sequelize.STRING(100),
      },
      LOGIN_USERID: {
        type: Sequelize.STRING(100),
      },
      PASSWORD: {
        type: Sequelize.STRING(200),
      },
      FIRST_NAME: {
        type: Sequelize.STRING(50),
      },
      LAST_NAME: {
        type: Sequelize.STRING(50),
      },
      MOBILE_NO: {
        type: Sequelize.STRING(65),
      },
      COMPANY_ID: {
        type: Sequelize.INTEGER(11),
      },
      IS_ACTIVE: {
        type: Sequelize.TINYINT(4),
      },
      IS_VERIFIED: {
        type: Sequelize.TINYINT(1),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
      USER_PROFILE_IMAGE: {
        type: Sequelize.STRING(200),
      },
      LAST_IP_ADDRESS: {
        type: Sequelize.STRING(20),
      },
      FAILED_LOGIN_ATTEMPT: {
        type: Sequelize.TINYINT(4),
      },
      LAST_LOGIN_ATTEMPT: {
        type: Sequelize.TINYINT(4),
      },
      SECURITY_SALT: {
        type: Sequelize.STRING(50),
      },
      LAST_PASSWORD_MODIFIED: {
        type: Sequelize.DATE,
      },
      PASSWORD_RESET_STATUS: {
        type: Sequelize.INTEGER(2),
      },
      IS_BLOCK: {
        type: Sequelize.TINYINT(4),
      },
      PMS: {
        type: Sequelize.TINYINT(4),
      },
      ATS_SEND_USER_EMAIL: {
        type: Sequelize.TINYINT(3).UNSIGNED,
      },
      HUBSPOT_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      SOURCE: {
        type: Sequelize.STRING(100),
      },
      EMAIL_VERIFICATION_SALT: {
        type: Sequelize.STRING(255),
      },
      MOBILE_LOGIN: {
        type: Sequelize.TINYINT(4),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.KM_USER_DETAILS,
      freezeTableName: true,
    }
  );
