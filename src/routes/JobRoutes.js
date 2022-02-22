const express = require('express');
const { HttpCodes, SUCCESS_MESSAGE } = require('../../config/Constants');
const { formatResponse } = require('../../lib/common/Util');
const getCandidateCountStatusByJobId = require('../controllers/JobsController/getCandidateCountStatusByJobId');
const getJobDetailsById = require('../controllers/JobsController/getJobDetailsById');
const getJobsList = require('../controllers/JobsController/getJobsList');

const app = express();

/**
 * Fetch Menus and Activities For Logged In User
 */
app.post('/getJobs', (req, res, next) => {
    getJobsList(req.body, req.auth, (error, data) => {
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
});

/**
 * get info about the jobid
 */
app.get('/:jobId', (req, res, next) => {
  getJobDetailsById(req.params, req.auth, (error, data) => {
    if (error) next(error);
    else {
      const response = formatResponse(HttpCodes.OK, SUCCESS_MESSAGE, data);
      res.status(HttpCodes.OK).json(response);
    }
  });
});

/**
 * get status count of candidate in a job
 */
app.post('/candidateStatusCount', (req, res, next) => {
  getCandidateCountStatusByJobId(req.body, (error, data) => {
    if (error) next(error);
    else {
      const response = formatResponse(HttpCodes.OK, SUCCESS_MESSAGE, data);
      res.status(HttpCodes.OK).json(response);
    }
  });
});

module.exports = app;