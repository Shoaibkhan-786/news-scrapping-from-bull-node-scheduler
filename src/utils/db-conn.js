const { connect, connection, set } = require('mongoose');
const { Mongo_Url } = require('../config/constant');

const dbConnected = () => {
    set('strictQuery', true)
    return connect(Mongo_Url)
}

connection.on('connected', () => {
    console.log('database connected')
})

module.exports = dbConnected
