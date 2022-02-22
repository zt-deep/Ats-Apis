const ZIMYO_ATS_APP_ID = 7;

const ATS_ROLE_IDS = [5,12,13,14,15,16];

const ATS_ROLE_NAME = {
  5: 'ATS ADMIN',
  12: 'HIRING MANAGER',
  13: 'INTERVIEWER',
  14: 'RECRUITER',
  15: 'EXECUTIVE',
  16: 'COORDINATOR'
};

const SUCCESS_MESSAGE = 'SUCCESS';

const FAILURE_MESSAGE = 'FAIL';

const HttpCodes = {
    OK : 200,
    CREATED : 201,
    ACCEPTED_BUT_PENDING : 202,
    NO_CONTENT : 204,
    WRONG_REQ_CONTENT : 422,
    SERVER_ERROR: 500
}

const ALPHA_NUMERIC_CHAR =
  '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmanopqrstuvwxyz@_#!:+=';

const JOB_CANDIDATE_STATUS_LIST = {
  'New': [0],
  'In_Progress': [1,2,3],
  'All_Active': [0,1,2,3],
  'On_Hold': [19],
  'Selected': [4],
  'Rejected': [5],
  'Withdraw': [6],
  'Hired': [100]
}

module.exports = {
  HttpCodes,
  ZIMYO_ATS_APP_ID,
  SUCCESS_MESSAGE,
  FAILURE_MESSAGE,
  ALPHA_NUMERIC_CHAR,
  ATS_ROLE_IDS,
  ATS_ROLE_NAME,
  JOB_CANDIDATE_STATUS_LIST,
};