const { Browser } = require('../services/puppeteer-services');
const newsModel = require('../models/news');
const  Selector  = require('../channel-selectors/selector');

exports.newsProcessor = async (job, done) => {
    try {
        const { link, title, channelName, feedId, channelId, published, description } = job.data;
        const browserInstance = await Browser.getInstance();

        const page = await browserInstance.newPage()

        await page.goto(link, { timeout: 0, waitUntil: 'networkidle0' })

        const longDescription = await Selector[channelName].getNewsContent(page);

        const payload = {
            title, link, feedId, channelId,
            publishedDate: published,
            shortDescription: description.replaceAll(/<[^>]*>/ig, "").trim(),
            longDescription
        }
        await newsModel.create(payload);

        await page.close()
        done()
    } catch (error) {
        console.log(error)
    }
}



