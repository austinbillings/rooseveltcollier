const zaq = require('zaq').as('tourDateAutoUpdater')

const RUN_ON_THE_HOUR = true;
const { cacheExpiration } = require('./config');
const { formatDate } = require('../utils/date-utils');
const { runEveryHour, getMsUntilNextHour } = require('../utils/timing-utils');
const fetchAndCacheTourData = require('./fetchAndCacheTourData');

module.exports = function tourDateAutoUpdater () {
    zaq.info('Setting up tour date auto-updater...');
    const offset = -45 * 60 * 1000;

    const runUpdater = () => {
        zaq.info('Auto-updater running now.');
        const nextRun = formatDate(Date.now() + getMsUntilNextHour() + offset);

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
    runEveryHour(runUpdater, offset);
}
