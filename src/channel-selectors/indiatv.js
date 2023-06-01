const { contentSelector, feedSelector } = require('../utils/content-selector');

exports.indiatv = {
    feedSelector: '.rss li',
    newsSelector: '.content p',
    getFeedData: feedSelector,
    getNewsContent: contentSelector
}