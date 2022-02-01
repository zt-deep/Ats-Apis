const { validationResult } = require("express-validator");
const { API_RESPONSE_CODES } = require("../../../config/Constants");

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(API_RESPONSE_CODES.WRONG_REQ_CONTENT).json({
    errors: extractedErrors,
  });
};

module.exports = validate;
