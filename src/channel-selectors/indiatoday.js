exports.indiatoday = {
    feedSelector: '.links li',
    newsSelector: '.description p , .PhotoCard_card__details__3Le4m p',
    getFeedData: ($, element) => {
        const feedLink = $(element).find("a").attr("href");
        const feedName = $(element).find("a").text();
        return { feedLink, feedName }
    },
    getNewsContent: async function (page) {
        const content = await page.evaluate(function (selector) {
            return document.querySelector(selector)?.textContent
        }, this.newsSelector)

        return content
    }
}