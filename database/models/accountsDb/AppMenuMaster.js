const Sequelize = require('sequelize');

module.exports = (sequelize) => sequelize.define(
      'app_menu_master',
      {
        id: {
          type: Sequelize.INTEGER(10).UNSIGNED,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        parent_id: {
          type: Sequelize.INTEGER(10).UNSIGNED,
          allowNull: true,
        },
        name: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        icon_class: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        menu_layout: {
          type: Sequelize.STRING(150),
        },
        position: {
          type: Sequelize.SMALLINT(5).UNSIGNED,
          allowNull: false,
        },
        app_id: {
          type: Sequelize.INTEGER(10).UNSIGNED,
        },
        action: {
          type: Sequelize.STRING(200),
          allowNull: false,
        },
        status: {
          type: Sequelize.ENUM,
          values: ['Active', 'Inactive'],
          allowNull: false,
        },
        default_status: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        intro: {
          type: Sequelize.STRING(100),
        },
        ios_icon: {
          type: Sequelize.STRING(100),
        },
        url: {
          type: Sequelize.STRING(150),
        },
        role_id: {
          type: Sequelize.SMALLINT(6),
        },
        role_ids: {
          type: Sequelize.STRING(100),
        },
        menu_version: {
          type: Sequelize.TINYINT(4),
          allowNull: false,
        },
        menu_for: {
          type: Sequelize.TINYINT(4),
          allowNull: false,
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
        },
        modified_on: {
          type: Sequelize.DATE,
        },
        country_id: {
          type: Sequelize.INTEGER(10),
        },
      },
      {
        timestamps: false,
        underscore: true,
        tablename: 'app_menu_master',
        freezeTableName: true,
      }
    );