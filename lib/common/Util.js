const sha1 = require('sha1');
const { HttpCodes, ALPHA_NUMERIC_CHAR, ATS_ROLE_IDS } = require('../../config/Constants');
const { logApiError, logMysqlError } = require('../../logger/customLogs');

/**
 *
 * @param {*} error error object
 * @param {*} message custom message
 * @param {*} data any data to be passed
 * @returns response object
 */
const formatResponse = (responseCode, message, data, error = false) => ({
  error,
  httpCode: responseCode,
  message,
  data,
});

/**
 *
 * @param {*} err error passed
 * @returns object with promiseError key
 */
const promiseErrorCatchFunction = (err) => ({ promiseError: err });

/**
 *
 * @param {*} err error object
 * @param {*} req request received from client
 * @param {*} res response being sent to client
 * @param {*} next callback function
 * @returns response
 */
const errorResponse = (err, req, res, next) => {
  const responseObject = formatResponse(
    HttpCodes.SERVER_ERROR,
    err.message,
    true
  );
  if (res.headersSent) {
    return next(err);
  }
  if (
    Object.prototype.hasOwnProperty.call(err, 'original') &&
    Object.prototype.hasOwnProperty.call(err.original, 'sqlMessage')
  ) {
    responseObject.message = 'Unexpected Error Occured.';
    logMysqlError(err.original, req, () => {});
  } else {
    logApiError(err, req, () => {});
  }
  if (req.forceLogin === true) {
    res.forceLogin = true;
  }
  res.status(HttpCodes.SERVER_ERROR).send(responseObject);
  return 0;
};

/**
 *
 * @param {*} password plain password
 * @param {*} salt salt to encrypt
 * @returns encrypted password
 */
const encryptPasswordSHA1 = (password, salt) =>
  sha1(salt + sha1(salt + sha1(password)));

/**
 *
 * @param {*} encoded encrypted Data
 * @returns decrypted data
 */
const decrypt = (encoded) => {
  const coded = Buffer.from(encoded, 'base64').toString();
  return coded
    .match(/.{1,2}/g)
    .map((hex) => parseInt(hex, 16))
    .map((charCode) => String.fromCharCode(charCode))
    .join('');
};

/**
 * Generate Random number
 * @param {*} min
 * @param {*} max
 * @returns
 */
const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 *
 * @param {*} PasswordLength
 * @param {*} Type Type of
 * @returns
 */
const generatePassword = (PasswordLength, Type = '') => {
  const CharStr = ALPHA_NUMERIC_CHAR;
  let CharLen = CharStr.length;
  if (Type.trim() === 'N') {
    CharLen = 9;
  } else if (Type.trim() === 'AN') {
    CharLen = 35;
  } else if (Type.trim() === 'AaN') {
    CharLen = 61;
  }
  let PasswdStr = '';
  while (PasswdStr.length < PasswordLength) {
    const RandChar = CharStr.substr(generateRandomNumber(0, CharLen), 1);
    if (PasswdStr.indexOf(RandChar) === -1) PasswdStr += RandChar;
  }
  return PasswdStr;
};

/**
 *
 * @param {*} remoteAddress
 * @returns
 */
const getIpv4Address = (remoteAddress) => {
  let ipv4 = '';
  (remoteAddress || '').split(':').forEach((v) => {
    const ip = (v || '').split('.');
    if (ip.length === 4) {
      let f = true;
      ip.forEach((i) => {
        if (i < 0 || i > 255) {
          f = false;
        }
      });
      if (f) {
        ipv4 = v;
      }
    }
    if (ipv4.length > 0) {
      return false;
    }
    return undefined;
  });
  return ipv4;
};

/**
 * This function throws the difference between the 2 dates in String
 * @param {*} date1
 * @param {*} date2
 * @returns String
 */
const dateDifferenceToString = (date1, date2) => {
  let diff = Math.abs(this.date_diff(date1, date2, 'S'));
  let out = `${diff % 60}s`;
  diff = Math.floor(diff / 60);
  if (diff >= 60) {
    out = `${diff % 60}m ${out}`;
    diff = Math.floor(diff / 60);
    if (diff >= 24) {
      out = `${diff % 24}h ${out}`;
      diff = Math.floor(diff / 24);
      if (diff > 0) {
        out = `${diff}d ${out}`;
      }
    } else if (diff > 0) {
      out = `${diff}h ${out}`;
    }
  } else if (diff > 0) {
    out = `${diff}m ${out}`;
  }
  return out;
};

const getCurrentDate = (format) => {
  const date = new Date();
  date.setMinutes(date.getMinutes() + 330 + Number(date.getTimezoneOffset()));
  return this.get_formated_date(date / 1000, format);
};

const getHighestRole = (roleIds = []) => {
  const highestRole = ATS_ROLE_IDS.find((role) => roleIds.indexOf(role) > -1);
  return { isAdmin: highestRole === 5, highestRole};
}

module.exports = {
  errorResponse,
  formatResponse,
  encryptPasswordSHA1,
  decrypt,
  generatePassword,
  getIpv4Address,
  generateRandomNumber,
  promiseErrorCatchFunction,
  dateDifferenceToString,
  getCurrentDate,
  getHighestRole,
};
