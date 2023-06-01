const { contentSelector, feedSelector } = require('../utils/content-selector');

exports.news18 = {
    feedSelector: ".subjective_things li",
    newsSelector: ".article-content-box p",
    getFeedData: feedSelector,
    getNewsContent: contentSelector
}