const FILE_NAME = 'Login.Js';
const { Op } = require('sequelize');
const logger = require('../../../logger/index')(FILE_NAME);

const { KmEmployeeDetailsModel, KmEmployeePersonalDetailsModel, KmOrgDetailsModel, KmUserDetailsModel } = require('../../../database/models/mainDb/index');
const { encryptPasswordSHA1, decrypt } = require('../../../lib/common/Util');

const getEmpUserIdByBusinessCodeEmployeecode = async (isNumber, username) => {
    try {
        const otherCondition = isNumber
          ? {
              [Op.and]: {
                EMPLOYEE_STATUS: {
                  [Op.eq]: 2,
                },
                '$km_employeee_personal_detail.EMPLOYEE_STATUS$': {
                  [Op.notIn]: [3, 4, 5],
                },
                [Op.or]: {
                  BUSINESS_CODE: {
                    [Op.ne]: '0',
                    [Op.eq]: username,
                  },
                  EMPLOYEE_CODE: {
                    [Op.ne]: '',
                    [Op.eq]: username,
                  },
                },
              },
            }
          : {
              [Op.and]: {
                EMPLOYEE_STATUS: {
                  [Op.eq]: 2,
                },
                '$km_employeee_personal_detail.EMPLOYEE_STATUS$': {
                  [Op.notIn]: [3, 4, 5],
                },
                EMPLOYEE_CODE: {
                  [Op.ne]: '',
                  [Op.eq]: username,
                },
              },
            };
        
        const filter = {
          attributes: ['EMPLOYEE_ID'],
          include: [
            {
              model: KmEmployeePersonalDetailsModel,
              attributes: [],
            },
          ],
          where: otherCondition,
        };
        const empUserId = await KmEmployeeDetailsModel.findAll(filter);
        return empUserId;
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
};

const getUserAndOrgDetails = async (userId, username) => {
    try {
        const condition = userId
          ? {
              [Op.and]: [{ USER_ID: userId }, { IS_ACTIVE: 1 }],
            }
          : {
              [Op.and]: {
                [Op.or]: {
                  EMAIL: {
                    [Op.eq]: username,
                  },
                  LOGIN_USERID: {
                    [Op.eq]: username,
                  },
                  MOBILE_NO: {
                    [Op.eq]: username,
                  },
                },
                IS_ACTIVE: {
                  [Op.eq]: 1,
                },
              },
            };
        
        const filter = {
          include: [
            {
              model: KmOrgDetailsModel,
              as: 'orgDetails',
            },
          ],
          where: condition,
        };

        const userOrgData = await KmUserDetailsModel.findAll(filter);
        return userOrgData;
    } catch (error) {
        logger.error(error);
        throw new Error(error);
    }
};

const userLogin = async (data, auth, callback) => {
    try {
        const { username, password } = data;
        const isNumber = !Number.isNaN(username);
        const empUserIdData = await getEmpUserIdByBusinessCodeEmployeecode(isNumber, username);
        let employeeId = '';
        if(empUserIdData.length > 1)
            throw new Error('Mulitple Login Found.');
        else if(empUserIdData.length === 1){
            employeeId = empUserIdData[0].dataValues.EMPLOYEE_ID;
        }
        const userData = await getUserAndOrgDetails(employeeId, username);
        const { orgDetails, IS_ACTIVE, IS_BLOCK, SECURITY_SALT, PASSWORD } = userData[0].dataValues;
        if(userData.length <= 0)
            throw new Error('Authentication failed.');
        else if(userData.length > 1)
            throw new Error('Multiple Login Found. Please contact your admin.');
        else if (orgDetails.dataValues.IS_ORG_BLOCKED === 1)
          throw new Error('Your Organization is temporarily locked.');
        else if (IS_ACTIVE !== 1)
          throw new Error('Your login is not active, kindly contact your HR.');
        else if (IS_BLOCK === 1)
          throw new Error(
            'Your login is temporary locked, kindly contact support.'
          );
        
        const passwords = {
          one: encryptPasswordSHA1(password.trim(), SECURITY_SALT),
          two: encryptPasswordSHA1(decrypt(password), SECURITY_SALT),
        };

        if (passwords.one !== PASSWORD.trim() &&password.two !== PASSWORD.trim())
            throw new Error('Authentication failed, Wrong password.');
          
        callback(false, null);
    } catch (error) {
        logger.error(error);
        callback(error);
    }
};

module.exports = userLogin;