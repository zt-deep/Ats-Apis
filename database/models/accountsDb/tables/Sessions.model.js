const Sequelize = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'sessions',
    {
      id: {
        type: Sequelize.STRING(501),
        allowNull: false,
        primaryKey: true,
      },
      service: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      expires: {
        type: Sequelize.INTEGER(11),
      },
      user_id: {
        type: Sequelize.INTEGER(11),
      },
      user_agent: {
        type: Sequelize.TEXT,
      },
      remote_addr: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      loggedin: {
        type: Sequelize.DATE,
      },
      data: {
        type: Sequelize.TEXT,
      },
      updated_on: {
        type: Sequelize.DATE,
      },
      auth_updated_on: {
        type: Sequelize.DATE,
      },
    },
    {
      createdAt: 'updated_on',
      updatedAt: 'auth_updated_on',
      underscore: true,
      tablename: 'sessions',
      freezeTableName: true,
    }
  );
