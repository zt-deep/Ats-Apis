const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_ATTACHMENT,
    {
      ATTCH_ID: {
        type: Sequelize.INTEGER(11).UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      FILE_NAME: {
        type: Sequelize.STRING(265),
        allowNull: false,
      },
      FILE_FOR: {
        type: Sequelize.STRING(65),
      },
      CANDIDATE_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
      },
      CREATED_ON: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    },
    {
      createdAt: 'CREATED_ON',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_ATTACHMENT,
      freezeTableName: true,
    }
  );
