const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_RAWDATA,
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
      CID: {
        type: Sequelize.INTEGER(10).UNSIGNED,
      },
      FIELD_NAME: {
        type: Sequelize.STRING(65),
      },
      FIELD_VALUE: {
        type: Sequelize.STRING(1000),
      },
      SECTION_NAME: {
        type: Sequelize.STRING(65),
      },
      FORM_TYPE: {
        type: Sequelize.INTEGER(5),
      },
      POSITION: {
        type: Sequelize.INTEGER(11),
      },
      CREATED_BY: {
        type: Sequelize.INTEGER(10),
      },
      CREATED_ON: {
        type: Sequelize.DATE,
      },
    },
    {
      createdAt: 'CREATED_ON',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_RAWDATA,
      freezeTableName: true,
    }
  );
