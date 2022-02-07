const express = require('express');
const { HttpCodes, SUCCESS_MESSAGE } = require('../../config/Constants');
const { formatResponse } = require('../../lib/common/Util');
const getUserMenuAndActivities = require('../controllers/MenuController/UserMenuAndActivities');

const app = express();

/**
 * Fetch Menus and Activities For Logged In User
 */
app.get('/getMenus', (req, res, next) => {
    getUserMenuAndActivities(req.body, req.auth, (error, data) => {
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

module.exports = app;