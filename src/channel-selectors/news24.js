const { contentSelector } = require('../utils/content-selector');

exports.news24 = {
    feedSelector: '.NewsArticle a',
    newsSelector: '.NewsArticle p',
    getFeedData: ($, element) => {
        const feedLink = $(element).attr("href");
        const feedName = $(element).text();
        return { feedLink, feedName }
    },
    getNewsContent: contentSelector
}