const validUrl = require("valid-url");
const cheerio = require("cheerio");
const axios = require("axios");
const feedModel = require('../models/feed');
const Selector = require('../channel-selectors/selector');



const fetchHtml = async (channel) => {
    try {
        const response = await axios.get(channel.link);
        const $ = cheerio.load(response.data);

        let elements;
        const { channelName } = channel;
    
        if (channelName in Selector) elements = $(Selector[channelName]["feedSelector"]).toArray();

        return { elements, $, channelName };
    }
    catch (err) {
        // console.log(err)
    }
}

exports.getFeedFromElement = async (channel) => {
    try {
        const { elements, $, channelName } = await fetchHtml(channel);

        let rssFeed = elements.map((element) => {

            const { getFeedData } = Selector[channelName];
            let { feedLink, feedName } = getFeedData($, element);

            if (!validUrl.isUri(feedLink)) {
                const url = new URL(channel.link);
                feedLink = url.origin.concat(feedLink)
            }

            return { feedName, feedLink, channelId: channel._id };
        });

        // - filterout rss categories to insert new ones
        const oldRssFeed = await feedModel.find();

        if (oldRssFeed.length != 0) {
            rssFeed = rssFeed.filter(({ feedLink: link1 }) =>
                !oldRssFeed.some(({ feedLink: link2 }) => link1 === link2));
        }

        await feedModel.insertMany(rssFeed);

    } catch (error) {
        console.log(error)

    }
}

