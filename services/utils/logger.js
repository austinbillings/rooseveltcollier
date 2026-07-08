const chalk = (() => {
  try { return require('chalk'); } catch { return null; }
})();

const paint = (color) => (text) => chalk && chalk[color] ? chalk[color](text) : text;

const styles = {
  info: paint('cyan'),
  ok:   paint('green'),
  win:  paint('green'),
  warn: paint('yellow'),
  err:  paint('red'),
  fatal: paint('red'),
  time: paint('gray'),
  debug: paint('gray'),
};

const write = (level, namespace, args) => {
  const stamp = new Date().toISOString().slice(11, 19);
  const tag = `[${stamp}]${namespace ? ` (${namespace})` : ''}`;
  const stream = level === 'err' || level === 'fatal' ? console.error : console.log;
  stream(styles[level] ? styles[level](tag) : tag, ...args);
};

const make = (namespace = '') => ({
  info:  (...a) => write('info',  namespace, a),
  ok:    (...a) => write('ok',    namespace, a),
  win:   (...a) => write('win',   namespace, a),
  warn:  (...a) => write('warn',  namespace, a),
  err:   (...a) => write('err',   namespace, a),
  fatal: (...a) => write('fatal', namespace, a),
  time:  (...a) => write('time',  namespace, a),
  debug: (...a) => write('debug', namespace, a),
  log:   (...a) => write('info',  namespace, a),
  as:    (name) => make(name),
});

module.exports = make();
