const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_MASTER_JOB_BOARDS,
    {
      ID: {
        type: Sequelize.INTEGER().UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      JB_NAME: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      JB_DESC: {
        type: Sequelize.STRING(250),
      },
      JB_CONFIG: {
        type: Sequelize.TEXT,
      },
      ICON_URL: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      // 0 - Free Plan, 1 - Paid
      PLAN: {
        type: Sequelize.TINYINT(),
        defaultValue: 0,
        allowNull: false,
      },
      // 1 - Active, 0 - Inactive
      JB_STATUS: {
        type: Sequelize.TINYINT(),
        defaultValue: 1,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_MASTER_JOB_BOARDS,
      freezeTableName: true,
    }
  );
