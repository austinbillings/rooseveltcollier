import React from 'react';

const socialUtils = {};

socialUtils.getEpithet = ({ name, uri }) => (uri ? uri : (name ? name : ''));
socialUtils.getLabel = (profile, template) => {
  let epithet = socialUtils.getEpithet(profile);
  template = template.replace(/%name%/, epithet);
  return template;
};

socialUtils.types = [
  {
    id: 'facebook',
    icon: 'facebook-official',
    name: ({ name }) => socialUtils.getLabel({ name }, '%name% on Facebook'),
    url: ({ uri }) => `https://facebook.com/${uri}`
  },
  {
    id: 'instagram',
    icon: 'instagram',
    name: (profile) => socialUtils.getLabel(profile, '@%name% on Instagram'),
    url: ({ uri }) => `https://www.instagram.com/${uri}`
  },
  {
    id: 'twitter',
    icon: 'twitter-square',
    name: (profile) => socialUtils.getLabel(profile, '@%name% on Twitter'),
    url: ({ uri }) => `https://twitter.com/${uri}`
  },
  {
    id: 'email',
    icon: 'envelope-square',
    name: ({ name }) => socialUtils.getLabel({ name }, 'Send %name% an Email'),
    url: ({ uri }) => `mailto:${uri}`
  },
  {
    id: 'spotify',
    icon: 'spotify',
    name: (profile) => socialUtils.getLabel(profile, '%name% on Spotify'),
    url: ({ uri }) => `https://open.spotify.com/artist/${uri}`
  },
  {
    id: 'youtube',
    icon: 'youtube-square',
    name: ({ name }) => socialUtils.getLabel({ name }, '%name% on YouTube'),
    url: ({ uri }) => `https://youtube.com/${uri}`
  },
  {
    id: 'website',
    icon: 'globe',
    name: ({ name }) => socialUtils.getLabel({ name }, 'The %name% website.'),
    url: ({ uri }) => uri
  }
];

socialUtils.makeSocialItem = (profile) => {
  let { id, uri, name } = profile;

  let template = socialUtils.types.find(t => t.id === id);
  if (!template) template = { id, name, url: uri, icon: 'square' };

  for (let key in template) {
    if (typeof template[key] === 'function') {
      let result = template[key]({ id, uri, name });
      template = Object.assign(template, { [key]: result });
    }
  }
  return template;
}

socialUtils.inject = (socialHash, options = {}) => {
  let output = [];
  // console.log('injecting...', socialHash);
  for (let id in socialHash) {
    let uri = socialHash[id];
    let config = Object.assign({ id, uri }, options);
    // console.log('- - config is', config);
    let item = socialUtils.makeSocialItem(config);
    // console.log('- - adding item', item);
    output.push(item);
  }
  // console.log('- got', output);
  return output;
}

export default socialUtils;
