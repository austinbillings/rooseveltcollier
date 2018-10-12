import Urls from './Urls';

const Pages = [
  {
    id: 'home',
    name: 'Home',
    url: Urls.home
  },
  {
    id: 'about',
    name: 'About',
    url: Urls.about.index
  },
  {
    id: 'music',
    name: 'Music',
    url: Urls.music.index
  },
  {
    id: 'tour',
    name: 'Tour',
    url: Urls.tour 
  },
  {
    id: 'video',
    name: 'Video',
    url: Urls.video.index
  },
  {
    id: 'live',
    name: 'Live',
    url: Urls.live,
    hidden: true
  },
  {
    id: 'contact',
    name: 'Contact',
    url: Urls.contact
  },
  {
    id: 'press',
    name: 'Press',
    url: Urls.press,
    hidden: true
  },
  {
    id: 'features',
    name: 'Features',
    url: Urls.features.index,
    hidden: true
  }
];

export default Pages;
