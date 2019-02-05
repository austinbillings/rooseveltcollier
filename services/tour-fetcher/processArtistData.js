const typeUtils = require('../utils/type-utils');
const zaq = require('zaq').as('processArtistData');
const { isObject, isArray } = typeUtils;

module.exports = function processArtistData (artistDataArray) {
    zaq.info(`Processing Artist Data (${artistDataArray.length} documents)`);

    var artistData = artistDataArray.reduce((output, artistDataset) => {
        var usableData = isArray(artistDataset)
            ? artistDataset
            : isObject(artistDataset)
                ? [ artistDataset ]
                : null;

        if (!usableData) return output;

        usableData.forEach(item => {
            const itemType = item['@type'];

            if (!isArray(output[itemType])) output[itemType] = [];

            output[itemType].push(item);
        });

        return output;
    }, {});

    var artistDataInfo = Object.keys(artistData).reduce(function (output, dataKey) {
        var count = artistData[dataKey].length;
        output[dataKey] = `[${count} item${count === 1 ? '' : 's'}]`;
        return output;
    }, {});

    zaq.ok('Processed artist data:', artistDataInfo);

    return artistData;
}
