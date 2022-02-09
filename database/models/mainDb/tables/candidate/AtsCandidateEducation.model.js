const Sequelize = require('sequelize');
const { mainDb } = require('../../../../../config/tableConstant');

module.exports = (sequelize) =>
  sequelize.define(
    mainDb.ATS_CANDIDATE_EDUCATION,
    {
      EDI: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ORG_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      CANDIDATE_ID: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      SCHOOL_NAME: {
        type: Sequelize.STRING(265),
      },
      DEGREE_DIPLOMA: {
        type: Sequelize.STRING(265),
      },
      FIELDS_OF_STUDY: {
        type: Sequelize.STRING(265),
      },
      YEAR_OF_COMPLETION: {
        type: Sequelize.STRING(265),
      },
      INACTIVE: {
        type: Sequelize.INTEGER(2),
      },
    },
    {
      createdAt: 'CREATED_ON',
      updatedAt: false,
      underscore: true,
      tablename: mainDb.ATS_CANDIDATE_EDUCATION,
      freezeTableName: true,
    }
  );
