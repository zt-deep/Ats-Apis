const FILE_NAME = 'jwtToken';
const jwt = require('jsonwebtoken');
const logger = require('../../logger/index')(FILE_NAME);
const { generatePassword } = require('./Util');

// Generating JWT token
const generateJwtToken = async (data) => {
    const metaJwtData = { salt: generatePassword(32, 'AaN'), ...data };
    logger.debug(`Metadata for JWT token: ${JSON.stringify(metaJwtData)}`);
    const tokenData =  await jwt.sign(metaJwtData, process.env.JWT_SECRET_KEY);
    return tokenData ? {error: false, data: tokenData} : {err: {message: 'Could not generate token'}, data: null};
};

module.exports = {generateJwtToken};