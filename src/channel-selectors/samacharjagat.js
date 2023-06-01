const { contentSelector, feedSelector } = require('../utils/content-selector');

exports.samacharjagat = {
    feedSelector: '.table-striped tbody tr',
    newsSelector: '.post_body p',
    getFeedData: feedSelector,
    getNewsContent: contentSelector
}