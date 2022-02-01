const { body } = require('express-validator');

const loginValidationRules = () => [
  // username must be an email
  body('username').isEmail().normalizeEmail(),
  // password must be at least 6 chars long with atleast 1 uppercase and 1 lower case and 1 special character
  body('password').isLength({ min: 6 }),
];

module.exports = loginValidationRules;
