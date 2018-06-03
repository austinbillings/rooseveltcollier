const Utils = {
  textWrap: (text = '', wrapLength = 12) => {
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
  },
  scrollToTop: (duration = 400) => {
    let scrollCount = 0;
    let cos = window.scrollY / 2;
    let start = performance.now();

    let step = (now) => {
      scrollCount += Math.PI / (duration / (now - start));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(0, Math.round(cos + cos * Math.cos(scrollCount)));
      start = now;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
};

export default Utils;
