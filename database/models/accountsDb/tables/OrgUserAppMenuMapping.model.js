const Sequelize = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'org_user_app_menu_mapping',
    {
      id: {
        type: Sequelize.INTEGER().UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER().UNSIGNED,
        allowNull: false,
      },
      org_id: {
        type: Sequelize.INTEGER().UNSIGNED,
        allowNull: false,
      },
      app_id: {
        type: Sequelize.INTEGER().UNSIGNED,
        allowNull: false,
      },
      app_menu: {
        type: Sequelize.JSON,
      },
      access_level: {
          type: Sequelize.INTEGER(),
          allowNull: false
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
      activity_menu: {
          type: Sequelize.JSON
      }
    },
    {
      timestamps: false,
      underscore: true,
      tablename: 'org_user_app_menu_mapping',
      freezeTableName: true,
    }
  );
