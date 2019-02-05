const path = require('path');
const zaq = require('zaq').as('TourFetcher');

const fetchArtistData = require('./fetchArtistData');
const processArtistData = require('./processArtistData');
const extractTourDates = require('./extractTourDates');
const saveLocally = require('./saveLocally');

const { artistDataFilePath, tourFilePath, artistId } = require('./config');

const tourValidator = (data) => Array.isArray(data) && data.length
    ? null
    : new TypeError('Tour data is invalid.');
const artistDataValidator = (data) => typeof data === 'object' && Object.keys(data).length
    ? null
    : new TypeError('Artist data is invalid.');

module.exports = function fetchAndCacheTourData () {
    return new Promise((resolve, reject) => {
        fetchArtistData(artistId)
            .then(data => processArtistData(data))
            .then(data => saveLocally(data, artistDataFilePath, artistDataValidator))
            .then(data => extractTourDates(data))
            .then(data => saveLocally(data, tourFilePath, tourValidator))
            .then(data => resolve(data))
            .catch(err => reject(err));
    });
};
