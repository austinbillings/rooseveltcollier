const fetchAndCacheTourData = require('./fetchAndCacheTourData');
const getCachedTourData = require('./getCachedTourData');

module.exports = (req, res) => {
    getCachedTourData()
        .then(data => res.json(data))
        .catch(err => res.code(500).json({ error: err }));
}
