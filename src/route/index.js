const { Router } = require('express');
const { insertChannel, startScrapping } = require('../controller/channel-ctrl');

const indexRouter = Router();

// for insert channel
indexRouter.post('/insert-channel', insertChannel);



// for start scrapping
indexRouter.get('/start', startScrapping);




module.exports = indexRouter;