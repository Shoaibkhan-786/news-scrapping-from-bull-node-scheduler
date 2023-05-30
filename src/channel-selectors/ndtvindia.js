exports.ndtvindia = {
    feedSelector: '.rss_list li',
    newsSelector: '.ins_storybody p',
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