const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_STATUS,
    {
      STID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      CANDIDATE_ID: {
        type: Sequelize.INTEGER(10),
      },
      CANDIDATE_STATUS: {
        type: Sequelize.TINYINT(2),
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_STATUS,
      freezeTableName: true,
    }
  );
