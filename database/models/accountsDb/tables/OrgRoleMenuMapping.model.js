const Sequelize = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'org_role_menu_mapping',
    {
      ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      ROLE_ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      MENU_ID: {
        type: Sequelize.TEXT,
      },
      ACTIVITY_ID: {
        type: Sequelize.TEXT,
      },
      STATUS: {
        type: Sequelize.TINYINT(),
        allowNull: false
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      CREATED_DATE: {
        type: Sequelize.DATE,
        allowNull: false
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: 'org_role_menu_mapping',
      freezeTableName: true,
    }
  );
