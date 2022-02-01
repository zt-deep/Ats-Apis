const FILE_NAME = 'loggerIndex';
const devLogger = require('./devLogger');
const prodLogger = require('./prodLogger');

const logger = process.env.NODE_ENV === 'DEVELOPMENT' ? devLogger : prodLogger;

logger(FILE_NAME).info(`SERVER IS IN ${process.env.NODE_ENV} MODE.`);
logger(FILE_NAME).info(`LOGGING LEVEL: ${process.env.LOGGING_MODE}.`);

module.exports = logger;