const { contentSelector } = require('../utils/content-selector');

exports.abpnews = {
    feedSelector: '.rsstablerow',
    newsSelector: '.uk-text-break p , .video_content p, .news_content p',
    getFeedData: ($, element) => {
        const feedLink = $(element).find("td > a").attr("href");
        const feedName = $(element).find('td').eq(0).text();
        return { feedLink, feedName }
    },
    getNewsContent: contentSelector
}