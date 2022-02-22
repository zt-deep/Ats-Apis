const _ = require('lodash');

const getPlaneResponseFromSequelize = (sequelizeResponse = {}) => {
  try {
    return JSON.parse(JSON.stringify(sequelizeResponse));
  } catch (error) {
    return {}
  }
}

module.exports = getPlaneResponseFromSequelize;