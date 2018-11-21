import KeyCodes from 'utils/key-codes';

const ID_PREFIX = 'listener_';

const Events = {
  listenerStore: [],
  add: (event, callback) => {
    let signature = [ event, callback ];
    let length = Events.listenerStore.push(signature);
    window.addEventListener(event, callback);
    return ID_PREFIX + (--length);
  },
  remove: (id) => {
    const offset = ID_PREFIX.length;
    let index = parseInt(id.substring(offset));
    let [ event, callback ] = Events.listenerStore[index];
    window.removeEventListener(event, callback);
    delete Events.listenerStore[index];
  },
  onKey: (key, callback) => {
    if (!key in KeyCodes) return;
    return Events.onKeyCode(KeyCodes[key], callback);
  },
  onKeyCode: (keyCodeOrSet, callback) => {
    let handler = (e) => {
      let acceptable = Array.isArray(keyCodeOrSet) ? keyCodeOrSet : [ keyCodeOrSet ];
      if (acceptable.includes(e.keyCode)) callback(e);
    };
    return Events.add('keydown', handler);
  }
};

export default Events;
