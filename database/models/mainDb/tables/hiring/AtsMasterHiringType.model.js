const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_MASTER_HIRING_TYPE,
    {
      ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(11),
      },
      NAME: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      /**
       *  1 - Deleted
       *  0 - Active
       */
      DELETE_STATUS: {
        type: Sequelize.TINYINT(2),
        allowNull: false,
        defaultValue: 1,
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(11).UNSIGNED,
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
    },
    {
      createdAt: 'CREATED_DATE',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_MASTER_HIRING_TYPE,
      freezeTableName: true,
    }
  );
