const express = require('express');
const { HttpCodes, SUCCESS_MESSAGE } = require('../../config/Constants');
const { formatResponse } = require('../../lib/common/Util');
const getCandidatesByJobId = require('../controllers/CandidateController/getCandidatesById');

const app = express();

/**
 * Fetch candidates details by job Id
 */
app.get('/:jobId', (req, res, next) => {
    getCandidatesByJobId(req.params, req.auth, (error, data) => {
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

module.exports = app;