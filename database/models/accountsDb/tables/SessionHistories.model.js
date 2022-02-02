const Sequelize = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'session_histories',
    {
      id: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      service: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      duration: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER(11),
      },
      referer: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      user_agent: {
        type: Sequelize.TEXT,
      },
      os: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      device: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      family: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      remote_addr: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      loggedin: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: 'session_histories',
      freezeTableName: true,
    }
  );
