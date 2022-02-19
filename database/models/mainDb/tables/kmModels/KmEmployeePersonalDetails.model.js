const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) => {
  const kmEmployeePersonalDetails = sequelize.define(
    mainDb.KM_EMPLOYEE_PERSONAL_DETAILS,
    {
      PERSNLID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      EMPLOYEE_ID: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        references: { model: 'km_employee_details', key: 'EMPLOYEE_ID' },
      },
      EMPLOYEE_STATUS: {
        type: Sequelize.INTEGER(2),
      },
      EMPLOYEE_TYPE: {
        type: Sequelize.INTEGER(11),
      },
      REPORTING_TO: {
        type: Sequelize.INTEGER(10),
      },
      REPORTING_HR: {
        type: Sequelize.INTEGER(11),
      },
      SECONDRY_REPORTING_MANAGER: {
        type: Sequelize.INTEGER(11),
      },
      SOURCE_OF_HIRE: {
        type: Sequelize.INTEGER(11),
      },
      SOURCE_OF_VERIFICATION: {
        type: Sequelize.INTEGER(4),
      },
      JOINING_DATE: {
        type: Sequelize.DATE,
      },
      AADHAR_CARD: {
        type: Sequelize.STRING(65),
      },
      PRAN_NUMBER: {
        type: Sequelize.STRING(100),
      },
      PAN_CARD: {
        type: Sequelize.STRING(65),
      },
      MOBILE_PHONE: {
        type: Sequelize.STRING(65),
      },
      OFFICE_PHONE: {
        type: Sequelize.STRING(15),
      },
      RESIDENCE_PHONE: {
        type: Sequelize.STRING(15),
      },
      MARITAL_STATUS: {
        type: Sequelize.TINYINT(3).UNSIGNED,
      },
      ANNIVERSARY_DATE: {
        type: Sequelize.DATE,
      },
      SPOUSE_NAME: {
        type: Sequelize.STRING(60),
      },
      SPOUSE_DOB: {
        type: Sequelize.DATE,
      },
      ADDRESS: {
        type: Sequelize.STRING(255),
      },
      JOB_DESCRIPTION: {
        type: Sequelize.STRING(265),
      },
      ABOUT_ME: {
        type: Sequelize.STRING(265),
      },
      RESIGNATION_DATE: {
        type: Sequelize.DATE,
      },
      GENDER: {
        type: Sequelize.STRING(65),
      },
      DATE_OF_BIRTH: {
        type: Sequelize.DATE,
      },
      NOTICE_PERIOD: {
        type: Sequelize.STRING(65),
      },
      LAST_WORKING_DAYS: {
        type: Sequelize.DATE,
      },
      MODE_OF_SEPARATION: {
        type: Sequelize.INTEGER(2),
      },
      UAN_NUMBER: {
        type: Sequelize.STRING(65),
      },
      PF_NUMBER: {
        type: Sequelize.STRING(65),
      },
      ESI_NUMBER: {
        type: Sequelize.STRING(65),
      },
      ACCOUNT_NUMBER: {
        type: Sequelize.STRING(65),
      },
      ACCOUNT_HOLDER_NAME: {
        type: Sequelize.STRING(65),
      },
      BANK_NAME: {
        type: Sequelize.STRING(65),
      },
      ACCOUNT_TYPE: {
        type: Sequelize.TINYINT(4),
      },
      BENEFICIARY_ID: {
        type: Sequelize.STRING(65),
      },
      IFSC_CODE: {
        type: Sequelize.STRING(65),
      },
      PERMANENT_ADDRESS: {
        type: Sequelize.STRING(255),
      },
      PROBATION_PERIOD: {
        type: Sequelize.DATE,
      },
      LEAVE_RULE_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      LEAVE_ASSIGN_DATE: {
        type: Sequelize.DATE,
      },
      FATHER_NAME: {
        type: Sequelize.STRING(40),
      },
      MOTHER_NAME: {
        type: Sequelize.STRING(40),
      },
      NATIONALITY: {
        type: Sequelize.STRING(15),
      },
      EFFECTIVE_DATE: {
        type: Sequelize.DATE,
      },
      APPOINTMENT_LATTER_DATE: {
        type: Sequelize.DATE,
      },
      ATTENDANCE_CATEGORY: {
        type: Sequelize.STRING(20),
      },
      PROBATION_CONFIRM_DATE: {
        type: Sequelize.DATE,
      },
      BLOOD_GROUP: {
        type: Sequelize.STRING(20),
      },
      DATE_OF_GRATUITY: {
        type: Sequelize.DATE,
      },
      SEPRATE_DATE: {
        type: Sequelize.DATE,
      },
      TERMINATION_DATE: {
        type: Sequelize.DATE,
      },
      BAND: {
        type: Sequelize.STRING(265),
      },
      MANUAL_EXIT: {
        type: Sequelize.INTEGER(11),
      },
      MANUAL_EXIT_DATE: {
        type: Sequelize.DATE,
      },
      BANK_ADDRESS: {
        type: Sequelize.STRING(255),
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.KM_EMPLOYEE_PERSONAL_DETAILS,
      freezeTableName: true,
    }
  );

  kmEmployeePersonalDetails.associate = (models) =>
    kmEmployeePersonalDetails.belongsTo(models.kmEmployeeDetailsModel, {
      foreignKey: {
        name: 'EMPLOYEE_ID',
        allowNull: false,
      },
    });
  
  return kmEmployeePersonalDetails;

}
