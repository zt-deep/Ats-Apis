const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_NOTES,
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
      /**
       *  1 - for active
       *  2 - for delete
       */
      STATUS: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
    },
    {
      createdAt: 'CREATED_AT',
      updatedAt: 'UPDATED_AT',
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_NOTES,
      freezeTableName: true,
    }
  );
