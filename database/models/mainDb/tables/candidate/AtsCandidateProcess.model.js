const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_PROCESS,
    {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      PROCESS_NAME: {
        type: Sequelize.STRING(65),
      },
      PROCESS_STATUS: {
        type: Sequelize.INTEGER(5),
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_PROCESS,
      freezeTableName: true,
    }
  );
