const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_HIRING_TEAM,
    {
      HIR_ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      JOB_ID: {
        type: Sequelize.INTEGER(),
      },
      USER_ID: {
        type: Sequelize.INTEGER(),
      },
      NAME: {
        type: Sequelize.STRING(65),
      },
      EMAIL: {
        type: Sequelize.STRING(100),
      },
      ROLE: {
        type: Sequelize.INTEGER(),
      },
      DELETE_STATUS: {
        type: Sequelize.INTEGER(),
        defaultValue: 0,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_HIRING_TEAM,
      freezeTableName: true,
    }
  );
