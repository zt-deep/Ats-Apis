const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_MASTER_HIRING_ACTIVITY,
    {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ACTIVITY_NAME: {
        type: Sequelize.STRING(265),
      },
      STATUS: {
        type: Sequelize.TINYINT(2),
        allowNull: false,
        defaultValue: 1
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
      },
      CREATED_DATE: {
        type: Sequelize.DATE,
      },
    },
    {
      createdAt: 'CREATED_DATE',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_MASTER_HIRING_ACTIVITY,
      freezeTableName: true,
    }
  );
