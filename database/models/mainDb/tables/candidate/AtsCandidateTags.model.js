const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_TAGS,
    {
      TAG_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(11),
      },
      TAG_NAME: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      CANDIDATE_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      DELETE_STATUS: {
        type: Sequelize.TINYINT(4),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
      },
      CREATED_AT: {
        type: Sequelize.DATE,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_TAGS,
      freezeTableName: true,
    }
  );
