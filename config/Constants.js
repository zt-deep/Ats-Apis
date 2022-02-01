const ZIMYO_ATS_APP_ID = 7;

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

module.exports = {
  HttpCodes,
  ZIMYO_ATS_APP_ID,
  SUCCESS_MESSAGE,
  FAILURE_MESSAGE,
  ALPHA_NUMERIC_CHAR
};