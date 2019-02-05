const zaq = require('zaq').as('tourDateAutoUpdater')

const { cacheExpiration } = require('./config');
const fetchAndCacheTourData = require('./fetchAndCacheTourData');

module.exports = function tourDateAutoUpdater () {
    zaq.info('Setting up tour date auto-updater...');

    const runUpdater = () => {
        zaq.info('Auto-updater running now.');
        const nextRun = new Date(Date.now() + cacheExpiration);

        fetchAndCacheTourData()
            .then(() => zaq.ok(`Auto-updater ran successfully.`))
            .catch(() => zaq.err(`Auto-updater failed!`))
            .finally(() => zaq.info(`Next run at ${nextRun}.`))
    }

    runUpdater();
    setInterval(runUpdater, cacheExpiration);
}
