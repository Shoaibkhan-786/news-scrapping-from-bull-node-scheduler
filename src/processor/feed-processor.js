const { newsQueue } = require('./index');
const { parse } = require('rss-to-json');
const feedModel = require('../models/feed');
const newsModel = require('../models/news');
const channelModel = require('../models/channel');


exports.addNewsIntoQueue = async () => {
    try {
        const newsLinks = await newsModel.find({}, 'link -_id');
        const waitingLinks = await newsQueue.getActive()
        const activeLinks = await newsQueue.getWaiting();

        let linkArray = newsLinks.map(data => data.link)

        linkArray = linkArray.concat([...waitingLinks, ...activeLinks].map(item => item.data.link));

        const feeds = await feedModel.find();

        for (let feed of feeds) {

            const channel = await channelModel.findById(feed.channelId, 'channelName');
            const { _id: channelId, channelName } = channel;
            const metadata = await parse(feed.feedLink);

            for (let item of metadata.items) {
                if (!linkArray.includes(item.link)) {
                    await newsQueue.add({
                        ...item, channelId,
                        channelName,
                        feedId: feed._id,

                    })
                }
            }
        }

    } catch (error) {
        console.log(error)
    }
}