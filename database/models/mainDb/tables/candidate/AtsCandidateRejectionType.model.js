const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_REJECTION_TYPE,
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
      REJECTION_NAME: {
        type: Sequelize.STRING(150),
      },
      /**
       *  1 - Active
       *  2 - Pending
       */
      REJECTION_STATUS: {
        type: Sequelize.TINYINT(2),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
    },
    {
      createdAT: 'CREATED_ON',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_REJECTION_TYPE,
      freezeTableName: true,
    }
  );
