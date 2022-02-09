const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_REVIEW,
    {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      CANDIDATE_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      JOB_ID: {
        type: Sequelize.INTEGER(11),
      },
      DESCRIPTION: {
        type: Sequelize.TEXT,
      },
      RATING: {
        type: Sequelize.STRING(255),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      CREATED_AT: {
        type: Sequelize.DATE,
      },
      UPDATED_BY: {
        type: Sequelize.INTEGER(11),
      },
      UPDATED_AT: {
        type: Sequelize.DATE,
      },
      IS_SHOWCARD: {
        type: Sequelize.TINYINT(4),
      },
      /**
       *  1 - For active
       *  2 - For Delete
       */
      STATUS: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
    },
    {
      createdAT: 'CREATED_AT',
      updatedAt: 'UPDATED_AT',
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_REVIEW,
      freezeTableName: true,
    }
  );
