const express = require('express');
const { HttpCodes, SUCCESS_MESSAGE } = require('../../config/Constants');
const { formatResponse } = require('../../lib/common/Util');
const getAtsMenuDetails = require('../controllers/MenuController/AtsMenuDetails');
const getOrgRoleMenus = require('../controllers/MenuController/OrgRoleMenuAndActivites');
const getUserMenuAndActivities = require('../controllers/MenuController/UserMenuAndActivities');

const app = express();

/**
 * Fetch Menus and Activities For Logged In User
 */
app.get('/getMenus', (req, res, next) => {
    getUserMenuAndActivities(req.auth, (error, data) => {
        if (error) 
            next(error);
        else{
            const response = formatResponse(
              HttpCodes.OK,
              SUCCESS_MESSAGE,
              data
            );
            res.status(HttpCodes.OK).json(response);
        }
    });
})

/**
 * Fetch Menus and Activities Arranged by role in an org
 */
app.get('/getRoleMenus', (req, res, next) => {
    getOrgRoleMenus(req.auth, (error, data) => {
      if (error) next(error);
      else {
        const response = formatResponse(HttpCodes.OK, SUCCESS_MESSAGE, data);
        res.status(HttpCodes.OK).json(response);
      }
    });
});

/**
 * Fetch all the ATS menu details
 */
app.get('/getAtsMenus', (req, res, next) => {
    getAtsMenuDetails((error, data) => {
      if (error) next(error);
      else {
        const response = formatResponse(HttpCodes.OK, SUCCESS_MESSAGE, data);
        res.status(HttpCodes.OK).json(response);
      }
    });
})

module.exports = app;