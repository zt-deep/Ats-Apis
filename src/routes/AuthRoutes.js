const express = require('express');
const { HttpCodes, SUCCESS_MESSAGE } = require('../../config/Constants');
const { formatResponse } = require('../../lib/common/Util');
const userLogin = require('../controllers/AuthController/Login');
const { createSession, validateToken } = require('../controllers/AuthController/Session');

const app = express();

// User Login
app.post('/login', (req, res, next) => {
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
app.post('/token', (req, res, next) => {
  createSession(req, (err, data) => {
    if (err) next(err);
    else {
      const response = formatResponse(HttpCodes.OK, SUCCESS_MESSAGE, data);
      res.status(HttpCodes.OK).json(response);
    }
  });
});

// Create Session and generate jwt token
app.post('/validate', (req, res, next) => {
  validateToken(req, (err, data) => {
    if (err) next(err);
    else {
      const response = formatResponse(HttpCodes.OK, SUCCESS_MESSAGE, data);
      res.status(HttpCodes.OK).json(response);
    }
  });
});

module.exports = app;