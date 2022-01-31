const Sequelize = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'api_mysql_err_log',
    {
      id: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      app_id: {
        type: Sequelize.TINYINT().UNSIGNED,
      },
      org_id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      user_id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      url: {
        type: Sequelize.STRING(200),
      },
      code: {
        type: Sequelize.STRING(100),
      },
      errno: {
        type: Sequelize.INTEGER().UNSIGNED,
      },
      sql_message: {
        type: Sequelize.STRING(200),
      },
      sql_state: {
        type: Sequelize.STRING(30),
      },
      sql: {
        type: Sequelize.TEXT,
      },
      err_stack: {
        type: Sequelize.TEXT,
      },
      captured_on: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: 'api_mysql_err_log',
      freezeTableName: true,
    }
  );
