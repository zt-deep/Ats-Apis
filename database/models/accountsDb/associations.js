const { AppMasterModel, OrgAppMenuMappingModel } = require("./index");

AppMasterModel.hasMany(OrgAppMenuMappingModel, {
  foreignKey: {
    name: 'app_id',
    allowNull: false,
  },
});

OrgAppMenuMappingModel.belongsTo(AppMasterModel, {
  foreignKey: 'app_id',
  targetKey: 'id',
});