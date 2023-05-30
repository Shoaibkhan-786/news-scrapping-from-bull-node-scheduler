const Queue = require('bull');
const { newsProcessor } = require('./news-processor');
const { Redis_Url, Redis_Port } = require('../config/constant');
const RedisConfig = {
    redis: { port: Redis_Port, host: Redis_Url }
};

const newsQueue = new Queue('newsQueue', RedisConfig);

newsQueue.process(5, newsProcessor);

module.exports = { newsQueue, RedisConfig };


