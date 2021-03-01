const winston = require('winston');
const options = {
    console: {
        level: 'debug',
        handleExceptions: true,
        json: true,
        colorize: true,
    },
}

const logger = winston.createLogger({
    transports: [new winston.transports.Console(options)]
})

exports.log = (message, freelancerId, employerId, data={}, level = "info") => {
    logger.log(level,{time:new Date(), message, freelancerId, employerId, data});
}