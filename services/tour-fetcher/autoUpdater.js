const zaq = require('zaq').as('tourDateAutoUpdater')

const { cacheExpiration } = require('./config');
const { formatDate } = require('../utils/date-utils');
const fetchAndCacheTourData = require('./fetchAndCacheTourData');

module.exports = function tourDateAutoUpdater () {
    zaq.info('Setting up tour date auto-updater...');

    const runUpdater = () => {
        zaq.info('Auto-updater running now.');
        const nextRun = formatDate(Date.now() + cacheExpiration);

        fetchAndCacheTourData()
            .then(() => {
                zaq.ok(`Auto-updater ran successfully.`);
                zaq.time(`Next run at ⏰ ${nextRun}.`);
            })
            .catch((err) => {
                zaq.err(`Auto-updater failed!`, err);
                zaq.time(`Next run at ⏰ ${nextRun}.`);
            });
    }

    runUpdater();
    setInterval(runUpdater, cacheExpiration);
}
