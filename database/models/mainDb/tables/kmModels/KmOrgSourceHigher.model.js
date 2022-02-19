const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.KM_ORG_SOURCE_HIGHER,
    {
      HIGHERID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(11),
      },
      HIGHER_NAME: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11),
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
      /**
       *  0 - Active
       *  1 - Pending
       */
      HIGHER_STATUS: {
        type: Sequelize.INTEGER,
      },
      DELETE_STATUS: {
        type: Sequelize.TINYINT,
        defaultValue: 0
      },
    },
    {
      createdAt: 'CREATED_ON',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_TAGS,
      freezeTableName: true,
    }
  );
