const Sequelize = require('sequelize');

module.exports = (sequelize) => sequelize.define(
    'org_app_menu_mapping',
    {
      id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      org_id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      app_id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      app_menu: {
        type: Sequelize.JSON,
      },
      created_by: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      created_on: {
        type: Sequelize.DATE,
      },
      modified_by: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
      },
      modified_on: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: 'org_app_menu_mapping',
      freezeTableName: true,
    }
  );
