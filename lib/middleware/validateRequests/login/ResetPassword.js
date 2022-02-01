const { body } = require('express-validator');

const resetPasswordValidationRules = () => ([
    // username must be an email
    body('username').isEmail(),
    // password must be at least 6 chars long with atleast 1 uppercase and 1 lower case and 1 special character
    body('password').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/, "i"),
  ]);

module.exports = resetPasswordValidationRules;