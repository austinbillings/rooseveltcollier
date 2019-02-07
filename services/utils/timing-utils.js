const Cloq = require('cloq');
const { isFunction, isNumber, isNonEmptyArray, isNonEmptyString } = require('../utils/type-utils');

function runAtIntervals (callback, intervals) {
    if (!isFunction(callback))
        throw new TypeError(`runWithInterval: callback is not a function. (got ${typeof callback})`);
    if (!isNumber(intervals) && (!isNonEmptyArray(intervals) || !intervals.every(isNumber)))
        throw new TypeError(`runWithInterval: interval is not a number or array of numbers. (got ${typeof interval})`);

    return new Promise((resolve, reject) => {
        if (isNumber(intervals))
            return resolve(setInterval(callback, intervals));
        if (intervals.length === 1)
            return resolve(setInterval(callback, intervals[0]));
        const lastInterval = intervals.pop();

        runWithTimeoutChain(callback, intervals).then(() => {
            return resolve(setInterval(callback, lastInterval));
        }, reject);
    });
}

function runWithTimeoutChain (callback, timeout) {
    if (!isFunction(callback))
        throw new TypeError(`runWithTimeoutChain: callback is not a function. (got ${typeof callback})`);
    if (!isNumber(timeout) && (!isNonEmptyArray(timeout) || !timeout.every(isNumber)))
        throw new TypeError(`runWithTimeoutChain: interval is not a number or array of nubmers. (got ${typeof timeout})`);

    return new Promise((resolve, reject) => {
        if (isNumber(timeout))
            return setTimeout(() => { callback(); resolve(); }, timeout);
        if (timeout.length === 1)
            return setTimeout(() => { callback(); resolve(); }, timeout[0]);

        function next () {
            if (!timeout.length)
                return resolve();

            const thisDuration = timeout.shift();
            setTimeout(() => { callback(); next(); }, thisDuration);
        }

        next();
    });
}

function getMsUntilNextHour () {
    const currentMinute = (new Date()).getMinutes();
    const currentSecond = (new Date()).getSeconds();
    const secondsLeftInMinute = 60 - currentSecond;
    const minutesLeftInHour = 60 - currentMinute;
    return (minutesLeftInHour * 60 * 1000) - (secondsLeftInMinute * 1000);
}

function runEveryHour (callback) {
    if (!isFunction(callback))
        throw new TypeError(`runNowAndEveryHourAt: callback is not a function. (got ${typeof callback})`);

    const msUntilNextHour = getMsUntilNextHour();
    const oneHour = 60 * 60 * 1000;

    return msUntilNextHour > 1000
        ? runAtIntervals(callback, [msUntilNextHour, oneHour])
        : runAtIntervals(callback, oneHour)
}

module.exports = {
    runAtIntervals,
    runWithTimeoutChain,
    getMsUntilNextHour,
    runEveryHour
};

// Testing ========================================================================================
//
// function testCallback (message) {
//     const clock = new Cloq(message);
//
//     return () => clock.lap('an iteration');
// }
//
// runAtIntervals(testCallback('every second'), 1000);
// runNowAndOnEveryHour(testCallback('now and every hour'));
