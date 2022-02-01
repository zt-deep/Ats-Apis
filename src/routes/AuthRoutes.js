const express = require('express');
const { HttpCodes, SUCCESS_MESSAGE } = require('../../config/Constants');
const { formatResponse } = require('../../lib/common/Util');
const userLogin = require('../controllers/AuthController/Login');
const { createSession } = require('../controllers/AuthController/Session');

const app = express();

// User Login
app.use('/login', (req, res, next) => {
    userLogin(req.body, req.auth, (err, data) => {
        if(err)
            next(err);
        else{
            const response = formatResponse(HttpCodes.OK, SUCCESS_MESSAGE, data);
            res.status(HttpCodes.OK).json(response);
        }
    });
});

// Create Session and generate jwt token
app.use('/token', (req, res, next) => {
  createSession(req, (err, data) => {
    if (err) next(err);
    else {
      const response = formatResponse(HttpCodes.OK, SUCCESS_MESSAGE, data);
      res.status(HttpCodes.OK).json(response);
    }
  });
});

module.exports = app;