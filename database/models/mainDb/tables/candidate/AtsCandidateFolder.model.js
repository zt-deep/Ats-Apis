const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_EDUCATION,
    {
      ID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(10),
        allowNull: false,
      },
      FOLDER_NAME: {
        type: Sequelize.STRING(200),
      },
      DELETE_STATUS: {
        type: Sequelize.INTEGER(10),
        defaultValue: 0,
        allowNull: false,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(10),
      },
      CREATED_AT: {
        type: Sequelize.DATE,
      },
    },
    {
      createdAt: 'CREATED_AT',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_EDUCATION,
      freezeTableName: true,
    }
  );
