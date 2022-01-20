
const { createLogger, format, transports } = require('winston');
const { getCurrentFileName } = require('../lib/Logger');

const { timestamp, json } = format;

const prodLogger = () =>
  createLogger({
    level: 'debug',
    format: format.combine(timestamp(), format.errors({ stack: true }), json()),
    defaultMeta: { fileName: getCurrentFileName(__filename) },
    transports: [new transports.Console()],
  });

module.exports = prodLogger;
