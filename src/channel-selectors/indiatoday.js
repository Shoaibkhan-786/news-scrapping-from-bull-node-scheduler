const { contentSelector, feedSelector } = require('../utils/content-selector');

exports.indiatoday = {
    feedSelector: '.links li',
    newsSelector: '.description p , .PhotoCard_card__details__3Le4m p',
    getFeedData: feedSelector,
    getNewsContent: contentSelector
}