const { Schema, model } = require('mongoose');

const newsSchema = Schema({
    title: {
        type: String,
        required:true
    },
    link: {
        type: String
    },
    shortDescription: {
        type: String
    },
    publishedDate: {
        type: Date
    },
    longDescription: {
        type: String
    },
    feedId: {
        type: Schema.Types.ObjectId,
        ref: "feedModel"
    },
    channelId: {
        type: Schema.Types.ObjectId,
        ref: "channelModel"
    }
    
}, { versionKey: false });


module.exports = newsModel = model('newsModel', newsSchema);