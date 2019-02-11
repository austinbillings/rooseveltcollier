const Nightmare = require('nightmare');
const zaq = require('zaq').as('fetchArtistData');
const Xvfb = require('xvfb');

const USE_XVFB = process.platform === 'linux';

module.exports = function fetchArtistData (artistId) {
    zaq.info('Fetching artist data...');

    return new Promise((resolve, reject) => {
        if (!artistId) {
            throw new TypeError('scrapeArtistDates: invalid artistId given');
        }


        const nightmare = Nightmare();
        const xvfb = USE_XVFB ? new Xvfb() : null;
        const artistProfileUrl = `https://www.bandsintown.com/a/${artistId}`;

        zaq.info(`Navigating to ${artistProfileUrl}...`);

        if (USE_XVFB) xvfb.startSync();


        nightmare
            .goto(artistProfileUrl)
            .wait('script[type="application/ld+json"]')
            .wait(2000)
            .evaluate(() => {
                var output = [];
                var json = document.querySelectorAll('script[type="application/ld+json"]');
                var documentCount = Object.values(json).length;

                json.forEach((rawDocument, index) => {
                    var documentContent = rawDocument.innerHTML;
                    var parsedContent = JSON.parse(documentContent);

                    output.push(parsedContent);
                });

                return output;
            })
            .end()
            .then(data => (USE_XVFB ? xvfb.stopSync() : null) || data)
            .then(resolve)
            .catch(err => {
                reject(err);
                if (USE_XVFB) xvfb.stopSync();
            });
    });
}
