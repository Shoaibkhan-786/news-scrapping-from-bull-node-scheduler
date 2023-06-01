const { contentSelector, feedSelector } = require('../utils/content-selector');

exports.thehindu = {
    feedSelector: '.rss-box li',
    newsSelector: '.articlebodycontent > p',
    getFeedData: feedSelector,
    getNewsContent: contentSelector
}