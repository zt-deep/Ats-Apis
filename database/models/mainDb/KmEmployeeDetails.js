const Sequelize = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'km_employee_details',
    {
      EMPLOYEE_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      ENTITY_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      EMP_USER_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      EMPLOYEE_CODE: {
        type: Sequelize.STRING(50),
      },
      EMPLOYEE_NAME: {
        type: Sequelize.STRING(150),
      },
      EMPLOYEE_MIDDLE_NAME: {
        type: Sequelize.STRING(40),
      },
      EMPLOYEE_LAST_NAME: {
        type: Sequelize.STRING(40),
      },
      EMPLOYEE_EMAIL: {
        type: Sequelize.STRING(200),
      },
      USER_IMAGE_PROFILE: {
        type: Sequelize.STRING(255),
      },
      EMPLOYEE_PERSONAL_EMAIL: {
        type: Sequelize.STRING(50),
      },
      DEPARTMENT: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      SUB_DEPARTMENT: {
        type: Sequelize.INTEGER(11),
      },
      DESIGNATION: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      LOCATION: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      EMPLOYEE_STATUS: {
        type: Sequelize.TINYINT(5),
      },
      ROSTER_STATUS: {
        type: Sequelize.INTEGER(2),
      },
      PAYROLL_STATUS: {
        type: Sequelize.INTEGER(2),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
      SOURCE_ID: {
        type: Sequelize.TINYINT(4),
      },
      BATCH_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      LAST_MODIFIED_BY: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      LAST_MODIFIED_ON: {
        type: Sequelize.DATE,
      },
      EMPLOYEE_DETAILS: {
        type: Sequelize.JSON,
      },
      EMPLOYEE_MODIFIED_DETAILS: {
        type: Sequelize.JSON,
      },
      EMPLOYEE_SHIFT: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      EMPLOYEE_SECONDRY_SHIFT: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      USER_IP: {
        type: Sequelize.STRING(20),
      },
      JOINING_MAIL_STATUS: {
        type: Sequelize.TINYINT(4).UNSIGNED,
      },
      SEPARATION_MAIL_STATUS: {
        type: Sequelize.TINYINT(4).UNSIGNED,
      },
      RESTRICT_CLOCK: {
        type: Sequelize.TINYINT(4),
      },
      BUSINESS_UNIT: {
        type: Sequelize.INTEGER(10),
      },
      COST_CENTER: {
        type: Sequelize.INTEGER(11),
      },
      EMP_GRADE: {
        type: Sequelize.STRING(65),
      },
      TRANSFER_DATES: {
        type: Sequelize.DATE,
      },
      BUSINESS_CODE: {
        type: Sequelize.INTEGER(11),
      },
      IS_DUMMY_RECORD: {
        type: Sequelize.TINYINT(4),
      },
      BIO_METRIC_ID: {
        type: Sequelize.STRING(32),
      },
      SKILL_LEVEL: {
        type: Sequelize.TINYINT(3).UNSIGNED,
      },
      IS_TRANSFERED: {
        type: Sequelize.TINYINT(4),
      },
      IS_SYNC: {
        type: Sequelize.TINYINT(4),
      },
      EMPLOYEE_NOTICE_PERIOD: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      LOGIN_POP_STATUS: {
        type: Sequelize.TINYINT(4),
      },
      NAVISION_SYNC: {
        type: Sequelize.TINYINT(4),
      },
      CHANNEL_TYPE: {
        type: Sequelize.INTEGER(11),
      },
      ENFORCE_ESI: {
        type: Sequelize.TINYINT(4),
      },
      ENFORCE_ESI_TILL: {
        type: Sequelize.DATE,
      },
      ATS_EMPLOYEE_TYPE: {
        type: Sequelize.TINYINT(2),
      },
      AADHAR_VERIFY: {
        type: Sequelize.TINYINT(2),
        allowNull: false,
      },
      RESIDES_IN: {
        type: Sequelize.SMALLINT(5).UNSIGNED,
      },
      PAYROLL_TYPE: {
        type: Sequelize.SMALLINT(5).UNSIGNED,
      },
      CONTRACT_END_DATE: {
        type: Sequelize.DATE,
      },
      PAYMENT_TYPE: {
        type: Sequelize.INTEGER(11),
      },
      DECLARATION_FREEZE: {
        type: Sequelize.TINYINT(4),
      },
      CREDIN_REFERNCE: {
        type: Sequelize.STRING(255),
      },
      PAYMENT_RETENTION_BONUS: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: 'km_employee_details',
      freezeTableName: true,
    }
  );
