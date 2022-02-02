const Sequelize = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define(
    'app_master',
    {
      id: {
        type: Sequelize.INTEGER().UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      slug: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      base_url: {
        type: Sequelize.STRING(200),
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM,
        values: ['Active', 'Inactive'],
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
    },
    {
      createdAt: 'created_on',
      updatedAt: 'modified_on',
      underscore: true,
      tablename: 'app_master',
      freezeTableName: true,
    }
  );
