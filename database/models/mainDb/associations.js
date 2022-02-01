const { 
    KmEmployeeDetailsModel, 
    KmEmployeePersonalDetailsModel, 
    KmUserDetailsModel,
    KmOrgDetailsModel
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