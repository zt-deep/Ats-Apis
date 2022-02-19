const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_HIRING_WORKFLOW,
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
      HIRING_TYPE_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      HIRING_PROCESS_ID: {
        type: Sequelize.INTEGER(11),
      },
      PROCESS_NAME: {
        type: Sequelize.STRING(200),
      },
      PROCESS_ACTIVITY: {
        type: Sequelize.INTEGER(11),
      },
      /**
       *  1 - Active
       *  0 - Inactive
       */
      DELETE_STATUS: {
        type: Sequelize.TINYINT(2),
        allowNull: false,
        defaultValue: 1
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
      },
      CREATED_DATE: {
        type: Sequelize.DATE,
      },
    },
    {
      createdAt: 'CREATED_DATE',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_HIRING_WORKFLOW,
      freezeTableName: true,
    }
  );
