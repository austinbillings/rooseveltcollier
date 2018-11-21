export function textWrap (text = '', wrapLength = 12) {
  if (typeof text !== 'string' || text.length < wrapLength) return text;
  let words = text.trim().split(' ');
  let output = '';
  let buffer = 0;

  words.forEach(word => {
    if (output.length && buffer + word.length + 1 > wrapLength) {
      output += '\n';
      buffer = 0;
    };
    output += ((output.length && buffer ? ' ' : '') + word);
    buffer += word.length;
  });

  return output;
};

export function promptForValidValue (message = '', initialValue = '', validator, invalidMessage = 'Please provide a valid value.') {
  let accepted = initialValue;
  let run = false;
  do {
    accepted = prompt(`${message} ${run ? '\n' + invalidMessage : ''}`, accepted);
    run = true;
  } while (accepted != null && (!accepted.length || !validator(accepted)));
  if (accepted) return accepted;
  else return;
}

export function flatJoinLists (lists, joiner = null) {
  return lists.reduce((output, currentList, index) => {
    return !output.length
      ? [ ...currentList ]
      : !joiner
        ? [ ...output, ...currentList ]
        : [ ...output, joiner, ...currentList]
  }, []);
};

export function visibleIf (condition) {
  return { opacity: (condition ? 1 : 0), pointerEvents: (condition ? 'all' : 'none') };
}

export function isHtml (text, strict = false) {
  if (typeof text !== 'string') return false;
  if (strict && (text[0] !== '<' || text[text.length - 1] !== '>')) return false;

  const parser = new DOMParser().parseFromString(text, 'text/html');
  return Array.from(parser.body.childNodes).some(node => node.nodeType === 1);
}

export function lineBreakSentences (message = '') {
  return typeof message !== 'string'
    ? message
    : message.split('. ').join('. <br />');
}

export function randomize (low = 0, high = 99) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

export function uid (len = 8, base = '') {
  while (base.length < len) {
    let index = randomize(0, 35);
    if (index >= 10) base += String.fromCharCode(87 + index);
    else base += index.toString();
  };
  return base;
};

export function stripLeadingSlash (urlValue) {
  return (typeof urlValue === 'string' && urlValue.indexOf('/') === 0)
    ? urlValue.replace('/', '')
    : urlValue;
};

export function getQueryStringValue (queryString, paramKey) {
  return new URLSearchParams(queryString).get(paramKey);
};

export function getCurrentQueryStringValue (paramKey) {
  return getQueryStringValue(window.location.search, paramKey);
};

window.uid = uid;
