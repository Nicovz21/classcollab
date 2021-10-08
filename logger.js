const winston = require('winston');

const loggerFormat = 
winston.format.printf(({ level, message, timestamp}) => {
    return `${timestamp} ${level}: ${message}`;
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({ format: 'YYYY-MM-DD-HH:mm:ss'}),
        winston.format.padLevels(),
        loggerFormat,
    ),
    transports: [
        new winston.transports.Console(),
    ],
});

module.exports = logger;