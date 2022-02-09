const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_REVIEW_CARD,
    {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      REVIEW_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      FEILD_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      feild_rating: {
        type: Sequelize.STRING(255),
      },
      FEILD_MESSAGE: {
        type: Sequelize.STRING(1000),
      },
      CREATED_AT: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
      },
      JOB_ID: {
        type: Sequelize.INTEGER(11),
      },
      CANDIDATE_ID: {
        type: Sequelize.INTEGER(11),
      },
    },
    {
      createdAT: 'CREATED_AT',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_REVIEW_CARD,
      freezeTableName: true,
    }
  );
