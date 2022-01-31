const Sequelize = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'api_error_log',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      app_id: {
        type: Sequelize.TINYINT().UNSIGNED,
      },
      org_id: {
        type: Sequelize.INTEGER().UNSIGNED,
      },
      user_id: {
        type: Sequelize.INTEGER().UNSIGNED,
      },
      url: {
        type: Sequelize.STRING(200),
      },
      code: {
        type: Sequelize.STRING(100),
      },
      error_class: {
        type: Sequelize.STRING(100),
      },
      message: {
        type: Sequelize.STRING(200),
      },
      err_stack: {
        type: Sequelize.TEXT,
      },
      captured_on: {
        type: Sequelize.DATE,
        allowNull: false
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: 'api_error_log',
      freezeTableName: true,
    }
  );
