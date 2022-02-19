const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_HIRING_WORKFLOW_STATUS,
    {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      /**
       *  1 - In Progress
       *  2 - Interview
       *  3 - Offered
       */
      TYPE_ID: {
        type: Sequelize.INTEGER(11),
        defaultValue: 0,
      },
      STEP_ID: {
        type: Sequelize.INTEGER(11),
        defaultValue: 0,
      },
      /**
       *  Stage ID
       */
      STATUS_ID: {
        type: Sequelize.INTEGER(11),
        defaultValue: 0,
      },
      STATUS_NAME: {
        type: Sequelize.STRING(265),
      },
      /**
       *  1 - Active
       *  0 - Inactive
       */
      ACTIVE: {
        type: Sequelize.TINYINT(2),
        allowNull: false,
        defaultValue: 1,
      },
      CREATED_DATE: {
        type: Sequelize.DATE,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: 0,
      },
      MODIFIED_BY: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: 0,
      },
      MODIFIED_DATE: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      createdAt: 'CREATED_DATE',
      updatedAt: 'MODIFIED_DATE',
      underscore: true,
      tablename: mainDb.ATS_HIRING_WORKFLOW_STATUS,
      freezeTableName: true,
    }
  );
