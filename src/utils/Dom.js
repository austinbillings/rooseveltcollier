import jQuery from 'jquery';

export function scrollToTop (target = 'html, body') {
  return scrollTo(target, 0);
};

export function scrollTo (target, scrollTop = 0, duration = 400) {
  return setTimeout(() => {
    jQuery(target).scroll();
    jQuery(target).animate({ scrollTop }, duration, 'swing');
  }, 250);
};

export function getOffset (target) {
  return jQuery(target).offset();
};
