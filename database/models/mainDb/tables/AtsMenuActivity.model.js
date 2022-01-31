const Sequelize = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'ats_menu_activity',
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
      tablename: 'ats_menu_activity',
      freezeTableName: true,
    }
  );
