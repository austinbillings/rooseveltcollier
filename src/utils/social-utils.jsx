import React from 'react';

const SocialUtils = {};

SocialUtils.getEpithet = ({ name, uri }) => (uri ? uri : (name ? name : ''));
SocialUtils.getLabel = (profile, template) => {
  let epithet = SocialUtils.getEpithet(profile);
  template = template.replace(/%name%/, epithet);
  return template;
};

SocialUtils.types = [
  {
    id: 'facebook',
    icon: 'facebook-official',
    name: ({ name }) => SocialUtils.getLabel({ name }, '%name% on Facebook'),
    url: ({ uri }) => `https://facebook.com/${uri}`
  },
  {
    id: 'instagram',
    icon: 'instagram',
    name: (profile) => SocialUtils.getLabel(profile, '@%name% on Instagram'),
    url: ({ uri }) => `https://www.instagram.com/${uri}`
  },
  {
    id: 'twitter',
    icon: 'twitter-square',
    name: (profile) => SocialUtils.getLabel(profile, '@%name% on Twitter'),
    url: ({ uri }) => `https://twitter.com/${uri}`
  },
  {
    id: 'email',
    icon: 'envelope-square',
    name: ({ name }) => SocialUtils.getLabel({ name }, 'Send %name% an Email'),
    url: ({ uri }) => `mailto:${uri}`
  },
  {
    id: 'spotify',
    icon: 'spotify',
    name: (profile) => SocialUtils.getLabel(profile, '%name% on Spotify'),
    url: ({ uri }) => `https://open.spotify.com/artist/${uri}`
  },
  {
    id: 'youtube',
    icon: 'youtube-square',
    name: ({ name }) => SocialUtils.getLabel({ name }, '%name% on YouTube'),
    url: ({ uri }) => `https://youtube.com/${uri}`
  },
  {
    id: 'website',
    icon: 'globe',
    name: ({ name }) => SocialUtils.getLabel({ name }, 'The %name% website.'),
    url: ({ uri }) => uri
  }
];

SocialUtils.makeSocialItem = (profile) => {
  let { id, uri, name } = profile;

  let template = SocialUtils.types.find(t => t.id === id);
  if (!template) template = { id, name, url: uri, icon: 'square' };

  for (let key in template) {
    if (typeof template[key] === 'function') {
      let result = template[key]({ id, uri, name });
      template = Object.assign(template, { [key]: result });
    }
  }
  return template;
}

SocialUtils.inject = (socialHash, options = {}) => {
  let output = [];
  // console.log('injecting...', socialHash);
  for (let id in socialHash) {
    let uri = socialHash[id];
    let config = Object.assign({ id, uri }, options);
    // console.log('- - config is', config);
    let item = SocialUtils.makeSocialItem(config);
    // console.log('- - adding item', item);
    output.push(item);
  }
  // console.log('- got', output);
  return output;
}

export default SocialUtils;
