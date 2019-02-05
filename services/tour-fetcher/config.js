const path = require('path');

module.exports = {
    artistId: 2156165,
    cacheExpiration: 1 * 60 * 60 * 1000, // 1 hour
    localCacheExpiration: 10 * 60 * 1000, // 10 minutes
    artistDataFilePath: path.join(__dirname, 'cache', 'artistData.json'),
    tourFilePath: path.join(__dirname, 'cache', 'tourDates.json'),
};
