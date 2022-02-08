const Sequelize = require('sequelize');
const { mainDb } = require('../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_MENU_ACTIVITY,
    {
      ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      MENU_ID: {
        type: Sequelize.INTEGER(),
      },
      MENU_ACTIVITY_NAME: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      STATUS: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(),
      },
      CREATED_DATE: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_MENU_ACTIVITY,
      freezeTableName: true,
    }
  );
