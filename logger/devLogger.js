const { createLogger, format, transports } = require('winston');

const { printf, timestamp } = format;

const devLogger = (fileName) => {
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
    defaultMeta: { fileName },
    transports: [new transports.Console()],
  });
}



module.exports = devLogger;
