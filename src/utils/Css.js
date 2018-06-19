export function keylightGradient (startColor = 'white', endColor = 'transparent') {
  return `radial-gradient(ellipse farthest-corner at left bottom, ${startColor} -8.8%, ${startColor} 15.5%, ${endColor} 80%)`;
};
