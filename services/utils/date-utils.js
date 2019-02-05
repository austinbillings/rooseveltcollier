const { isString } = require('./type-utils');

function cleanupDateString (value) {
    if (!isString(value))
        return value;
    if (value.includes('am') && !value.includes(' am'))
        return value.replace('am', ' am ');
    if (value.includes('pm') && !value.includes(' pm'))
        return value.replace('pm', ' pm ');

    return value;
}

function ensureTwoDigits (value) {
    return value.toString().length === 1
        ? '0'.concat(value.toString())
        : value.toString();
}

function getTwelveHourTime (date) {
    var hours = ((date.getHours()) % 12).toString();
    var minutes = ensureTwoDigits(date.getMinutes());
    var meridian = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${hours === '0' ? '12' : hours}:${minutes} ${meridian}`;
}

function getShortDateString (date) {
    var month = (date.getMonth() + 1);
    var day = date.getDate();
    var year = date.getFullYear().toString().substring(2);

    return `${month}/${day}/${year}`;
}

function formatDate (rawDate, lowerCase) {
    var parseableDate = cleanupDateString(rawDate);
    var value = new Date(parseableDate);
    var date = getShortDateString(value);
    var time = getTwelveHourTime(value);
    var output = `${time} ${date}`;

    return lowerCase ? output.toLowerCase() : output;
}

module.exports = {
    cleanupDateString,
    ensureTwoDigits,
    getTwelveHourTime,
    getShortDateString,
    formatDate
};
