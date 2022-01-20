const { createLogger, format, transports } = require('winston');
const { getCurrentFileName } = require('../lib/Logger');

const { printf, timestamp } = format;

const devLogger = () => {
  const loggerFormat = printf(
    ({ level, message, logtimestamp, stack }) =>
      `${logtimestamp} [${level}]: ${stack || message}`
  );

  return createLogger({
    level: 'debug',
    format: format.combine(
      format.colorize(),
      timestamp(),
      format.errors({ stack: true }),
      loggerFormat
    ),
    defaultMeta: { fileName: getCurrentFileName(__filename) },
    transports: [new transports.Console()],
  });
}



module.exports = devLogger;
