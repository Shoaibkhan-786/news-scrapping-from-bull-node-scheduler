require('dotenv').config();
const express = require('express');
const dbConnected = require('./utils/db-conn');
const indexRouter = require('./route');
const { Browser } = require('./services/puppeteer-services');
const { arenaConfig } = require('./utils/bull-arena');
const port = parseInt(process.env.PORT || 8080);
const app = express();

require('./processor/index');

app.use(express.json());
app.use('/', arenaConfig);
app.use(indexRouter);


dbConnected()
    .then(() => {
        Browser.getInstance().then(() => {
            app.listen(port, () => {
                console.log(`server is up and running on ${port}`);
            })
        })
    })
    .catch(() => {
        console.log('something went wrong while connected to database')
    })