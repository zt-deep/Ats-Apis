const Sequelize = require('sequelize');
const { mainDb } = require('../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_ROLE_DATA_VISIBILITY,
    {
      ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      ROLE_ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      // 1-JOB, 2-CANDIDATE
      MENU_ID: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
      // 1-SELF, 2-ALL
      VISIBILITY: {
        type: Sequelize.TINYINT(),
      },
      // 1-SELF, 2-ALL
      ACTIVITY: {
        type: Sequelize.TINYINT(),
      },
      STATUS: {
        type: Sequelize.INTEGER(),
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscore: true,
      tablename: mainDb.ATS_ROLE_DATA_VISIBILITY,
      freezeTableName: true,
    }
  );
