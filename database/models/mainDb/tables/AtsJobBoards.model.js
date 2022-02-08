const Sequelize = require('sequelize');
const { mainDb } = require('../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_JOB_BOARDS,
    {
      ID: {
        type: Sequelize.BIGINT().UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      JOB_ID: {
        type: Sequelize.INTEGER().UNSIGNED,
        allowNull: false,
      },
      /**
       * 0 - Not Published
       * 1 - Published
       * 2 - Publish failed
       * 3 - deleted
       */
      STATUS: {
        type: Sequelize.TINYINT,
        allowNull: false,
      },
      JSON_RESPONSE: {
        type: Sequelize.JSON,
      },
      DELETE_REQUEST: {
        type: Sequelize.TINYINT,
        allowNull: false,
      },
      DELETED_JSON_RESPONSE: {
        type: Sequelize.JSON,
      },
      PUBLISH_DATE: {
        type: Sequelize.DATE,
      },
      DELETED_DATE: {
        type: Sequelize.DATE,
      },
      JOB_BOARD_ID: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_JOB_BOARDS,
      freezeTableName: true,
    }
  );
