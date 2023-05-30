const { Schema, model } = require('mongoose');

const channelSchema = Schema({
    channelName: {
        type: String
    },
    link: {
        type: String
    },
    
}, { versionKey: false });


module.exports = channelModel = model('channelModel', channelSchema);