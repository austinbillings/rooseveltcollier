const nightmare = require('nightmare')();
const zaq = require('zaq').as('fetchArtistData');

module.exports = function fetchArtistData (artistId) {
zaq.info('Fetching artist data...');
    return new Promise((resolve, reject) => {
        if (!artistId) {
            throw new TypeError('scrapeArtistDates: invalid artistId given');
        }

        const artistProfileUrl = `https://www.bandsintown.com/a/${artistId}`;

        zaq.info(`Navigating to ${artistProfileUrl}...`);

        const info = text => zaq.info(text);

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
            .then(resolve)
            .catch(reject);
    });
}
