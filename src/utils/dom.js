export function scrollToTop () {
  return scrollTo(0);
}

export function scrollTo (top = 0) {
  return window.scrollTo({ top, behavior: 'smooth' });
}

export function getOffset (target) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return { top: 0, left: 0 };
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + window.scrollY,
    left: rect.left + window.scrollX,
  };
}
