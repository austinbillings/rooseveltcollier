const zaq = require('zaq').as('extractTourDates');
const { isObject, isArray } = require('../utils/type-utils');

function simplifyTourDate ({ location, startDate: date, url: tickets }) {
    const { name: venue, address: city } = location;

    return { date, city, venue, tickets };
}

module.exports = function extractTourDates (artistData) {
    zaq.info('Extracting tour date data...');

    if (!isObject(artistData))
        throw new TypeError('extractTourDates: artistData is not an object');
    if (!isArray(artistData.MusicEvent) || !artistData.MusicEvent.length)
        throw new TypeError('extractTourDates: no tourDates found (as .MusicEvent)');

    var tourDates = artistData.MusicEvent.map(simplifyTourDate);

    zaq.ok(`Extracted ${tourDates.length} tour dates.`);

    return tourDates;
};
