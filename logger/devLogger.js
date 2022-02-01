const { createLogger, format, transports } = require('winston');

const { printf, timestamp, combine, colorize, errors } = format;

const devLogger = (fileName) => {
  const loggerFormat = printf(
    ({ level, message, stack, logtimestamp }) =>
      `${logtimestamp} [${level}][${fileName}]: ${stack || message}`
  );

  return createLogger({
    level: process.env.LOGGING_MODE,
    format: combine(
      colorize(),
      errors({ stack: true }),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      loggerFormat
    ),
    // defaultMeta: { fileName },
    transports: [new transports.Console()],
  });
}



module.exports = devLogger;
