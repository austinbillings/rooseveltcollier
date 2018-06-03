const zaq = require('zaq');
const fs = require('fs');
const config = require('./steno.config.js');

const steno = {
  list: require(config.dbPath),
  isValidEmail: (email) => {
    return email && email.length && typeof email === 'string' && email.match(config.pattern);
  }
};

steno.addToList = (email) => {
  return new Promise((resolve, reject) => {
    if (!steno.isValidEmail(email)) {
      reject('Invalid email provided: ' + email.toString());
      return;
    };

    email = email.toLowerCase();
    if (steno.list.indexOf(email) < 0) {
      steno.list.push(email);
      zaq.info('Added email to list:', email);
      steno.save().then(res => {
        resolve(email);
      }, err => {
        reject(err);
      });
    } else {
      resolve(null);
    }
  });
};

steno.express = (req, res) => {
  if (!req || !req.body || !req.body.email) reject('Incomplete request received');
  steno.addToList(req.body.email).then(result => {
    res.send({ success: true, status: result ? 'added' : 'exists' });
  }, err => {
    res.status(400).send({ success: false, status: 'failed', err })
  });
};

steno.getJson = () => JSON.stringify(steno.list, null, config.pretty ? '\t' : '');

steno.save = () => {
  zaq.info('Saving steno DB...')
  return new Promise((resolve, reject) => {
    fs.writeFile(config.dbPath, steno.getJson(), err => {
      if (err) {
        zaq.err('Couldn\'t save steno DB', err);
        reject(err);
      };
      zaq.win('Saved steno db.');
      resolve(config.dbPath);
    });
  });
};

module.exports = steno;
