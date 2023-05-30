require('dotenv').config();
const Redis_Url = process.env.REDIS_URL;
const Redis_Port = process.env.REDIS_PORT;
const Mongo_Url = process.env.MONGO_URL;

module.exports = { Redis_Port, Redis_Url, Mongo_Url } ;