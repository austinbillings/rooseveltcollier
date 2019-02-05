const fs = require('fs');
const zaq = require('zaq').as('getCachedTourData');

const { isString } = require('../utils/type-utils');
const { cacheExpiration, tourFilePath } = require('./config');
const fetchAndCacheTourData = require('./fetchAndCacheTourData');

const memCache = { data: null };
const resetCache = () => memCache.data = null;
const cachePurger = setInterval(resetCache, cacheExpiration);

module.exports = function getCachedTourData() {
    return new Promise((resolve, reject) => {
        if (memCache.data) {
            zaq.info('Serving memcached data...');

            return resolve(memCache.data);
        }

        function handleTourData (tourData) {
            zaq.info('Mem-caching and serving updated tour data...');
            memCache.data = isString(tourData) ? JSON.parse(tourData) : tourData;

            return resolve(memCache.data);
        }

        if (fs.existsSync(tourFilePath)) {
            zaq.info('Fetching local tour data from file...');

            return fs.readFile(tourFilePath, 'utf-8', (err, data) => {
                return err
                    ? reject(err)
                    : handleTourData(data);
            });
        }

        zaq.info('No saved tour data. Fetching remote tour data...');

        fetchAndCacheTourData().then(handleTourData, reject);
    });
};
