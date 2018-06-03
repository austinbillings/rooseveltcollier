const path = require('path');

module.exports = {
  pretty: true,
  pattern: /^[^\s@]+@[^\s!?&%*$#@]+\.[a-zA-Z\.]+$/g,
  dbPath: path.join(__dirname, 'db.json')
};
