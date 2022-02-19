const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_HIRING_PROCESS,
    {
      HIR_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      /**
       *  1 - In progress
       *  2 - Interview
       *  3 - Offered
       */
      TYPE: {
        type: Sequelize.INTEGER(4),
      },
      NAME: {
        type: Sequelize.STRING(65),
      },
      ACTIVITY_ID: {
        type: Sequelize.INTEGER(10),
      },
      /**
       *  1 - Deleted
       *  0 - Not Deleted
       */
      DELETE_STATUS: {
        type: Sequelize.TINYINT(2),
        defaultValue: 0,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(10),
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
    },
    {
      createdAt: 'CREATED_ON',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_HIRING_PROCESS,
      freezeTableName: true,
    }
  );
