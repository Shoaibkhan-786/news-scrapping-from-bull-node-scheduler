const { contentSelector, feedSelector } = require('../utils/content-selector');

exports.zeebusiness = {
    feedSelector: '.clearfix li',
    newsSelector: '.even p',
    getFeedData: feedSelector,
    getNewsContent: contentSelector
}