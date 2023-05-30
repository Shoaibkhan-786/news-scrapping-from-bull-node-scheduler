const { getFeedFromElement } = require('../utils/get-feed');
const channelModel = require('../models/channel');
const { addNewsIntoQueue } = require('../processor/feed-processor');
const Schedule = require('node-schedule');

exports.insertChannel = async (req, res) => {
    try {
        let { channelName, link } = req.body;
        channelName = channelName.toLowerCase().replace(" ", "");
        const channel = await channelModel.find({ channelName, link });

        if (channel.length == 0) {
            await channelModel.create({ channelName, link });
            res.send('channel inserted');
        }
    } catch (error) {
        console.log(error)
    }
}

exports.startScrapping = async (req, res) => {
    try {
        const channels = await channelModel.find();
        if (channels.length != 0) {
            for (let channel of channels) {
                await getFeedFromElement(channel)
            };

            await addNewsIntoQueue()
            // Schedule.scheduleJob('* 42 * * * *', async () => {
            //     await addNewsIntoQueue()
            // });

            res.send('scrapping started');
        } else {
            res.send('add some channels to scrap.');
        }
    } catch (error) {
        console.log(error)
    }
}

