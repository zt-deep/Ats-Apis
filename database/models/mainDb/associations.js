const { 
    KmEmployeeDetailsModel, 
    KmEmployeePersonalDetailsModel, 
    KmUserDetailsModel,
    KmOrgDetailsModel,
    AtsJobModel,
    AtsJobMappingModel,
    AtsHiringTeamModel
} = require('./index');

KmEmployeeDetailsModel.hasOne(KmEmployeePersonalDetailsModel, {
  foreignKey: {
      name: 'EMPLOYEE_ID',
      allowNull: false
  },
});

KmEmployeePersonalDetailsModel.belongsTo(KmEmployeeDetailsModel, {
  foreignKey: 'EMPLOYEE_ID',
  targetKey: 'EMPLOYEE_ID',
});

KmOrgDetailsModel.hasMany(KmUserDetailsModel, {
  foreignKey: {
    name: 'COMPANY_ID',
    allowNull: false,
  },
});

KmUserDetailsModel.belongsTo(KmOrgDetailsModel, {
  as: 'orgDetails',
  foreignKey: 'COMPANY_ID',
  targetKey: 'ORG_ID',
});

// oneToMany
AtsJobModel.hasMany(AtsJobMappingModel, {
  foreignKey: {
    name: 'JOB_ID',
  },
});

// many To One
AtsJobMappingModel.belongsTo(AtsJobModel, {
  foreignKey: 'JOB_ID',
  targetKey: 'JOB_ID',
});

// many To One
AtsHiringTeamModel.belongsTo(AtsJobModel, {
  foreignKey: 'JOB_ID',
  targetKey: 'JOB_ID',
});

// oneToMany
AtsJobModel.hasMany(AtsHiringTeamModel, {
  foreignKey: {
    name: 'JOB_ID',
  },
});


