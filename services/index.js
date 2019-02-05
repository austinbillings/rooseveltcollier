const zaq = require('zaq');
const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const steno = require('./steno/steno');
const tourFetcher = require('./tour-fetcher/expressHandler');
const tourDateAutoUpdater = require('./tour-fetcher/autoUpdater');

tourDateAutoUpdater();

let app = express();
let api = express.Router();
let port = 19362;

api.use(bodyParser.urlencoded({ extended: true, limit: '5mb' }));
api.use(bodyParser.json({ limit: '50mb' }));

api.post('/subscribe', cors(), steno.express);
api.get('/tour', cors(), tourFetcher);

app.use('/api', cors(), api);
app.use(express.static(path.join(__dirname, '/public')));
app.listen(port);

zaq.info('Server running on ' + port);
