const fs = require('fs');
const path = require('path');
const zaq = require('zaq').as('saveLocally');
const { isString, isFunction, isDefined } = require('../utils/type-utils');

module.exports = function saveLocally (data, filePath, validator) {
    return new Promise((resolve, reject) => {
        if (!isDefined(data))
            throw new TypeError('saveLocally: data is undefined.');
        if (!isString(filePath))
            throw new TypeError(`saveLocally: invalid filePath given: ${filePath}`);
        if (!isFunction(validator))
            zaq.warn('No data validator provided... be careful, invalid data might be saved.');

        const relativePath = './' + path.relative(__dirname, filePath);
        zaq.info(`Saving data (${typeof data}) locally as ${relativePath}...`);

        try {
            validator(data);
        } catch (validationErr) {
            throw validationErr;
        }

        const jsonData = JSON.stringify(data, null, '  ');

        fs.writeFile(filePath, jsonData, err => {
            if (err) return reject(err)

            zaq.ok(`Successfully saved ${jsonData.length} bytes to ${relativePath}`);

            resolve(data);
        });
    });
};
