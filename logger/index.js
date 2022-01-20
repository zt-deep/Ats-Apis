const devLogger = require('./devLogger');
const prodLogger = require('./prodLogger');

const logger = process.env.NODE_ENV === 'development' ? devLogger() : prodLogger();

module.exports = logger;