const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_JOB_HIRING_ROLE,
    {
      HIRING_ID: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      HIRING_NAME: {
        type: Sequelize.STRING(65),
      },
      HIRING_STATUS: {
        type: Sequelize.TINYINT(2),
        defaultValue: 1
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_JOB_HIRING_ROLE,
      freezeTableName: true,
    }
  );
