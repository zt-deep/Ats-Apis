
const { createLogger, format, transports } = require('winston');

const { timestamp, json } = format;

const prodLogger = (fileName) =>
  createLogger({
    level: 'debug',
    format: format.combine(timestamp(), format.errors({ stack: true }), json()),
    defaultMeta: { fileName },
    transports: [new transports.Console()],
  });

module.exports = prodLogger;
