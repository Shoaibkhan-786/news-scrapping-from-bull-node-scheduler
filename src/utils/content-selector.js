exports.feedSelector = ($, element) => {
    const feedLink = $(element).find('a').attr("href");
    const feedName = $(element).find('a').text();
    return { feedLink, feedName }
}

exports.contentSelector = async function (page) {
    const content = await page.$$eval(this.newsSelector, news => {
        return (news.map(news => news.textContent)).join(' ')
    })
    return content
}