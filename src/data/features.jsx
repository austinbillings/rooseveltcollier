import React from 'react';

import Icon from 'components/icon';

const features = [
  {
    title: <span>SUMMER IN EUROPE</span>,
    content: (
      <p>Newly announced: tour dates throughout July in Europe. Get those tickets while they're hot!</p>
    ),
    image: {
      url: '/assets/2022/europe-summer-cropped.jpg'
    },
    action: {
      text: <span>Get Tickets</span>,
      url: '/tour'
    }
  },
  {
    title: <span>MAY DATES IN FLORIDA!</span>,
    content: (
      <p>Roosevelt's playing some dates in Florda this May. Featuring Blaque Dynamite and with Brad Miller on all dates!</p>
    ),
    image: {
      url: '/assets/2022/may-florida-tour.png'
    },
    action: {
      text: <span>Get Tickets</span>,
      url: '/tour'
    }
  },
  {
    title: <span>TROUBLE NO MORE</span>,
    content: (
      <p>The Dr. will be playing at the 50th Anniversary Celebration of The Allman Brothers Band's "Eat a Peach", as part of Trouble No More. Catch it March 26th at The Beacon in New York.</p>
    ),
    image: {
      url: '/assets/2022/tnm-show.jpeg'
    },
    action: {
      text: <span>Get Tickets</span>,
      url: '/tour'
    }
  },
  {
    title: <span>At WOMEX</span>,
    content: (
      <p>Roosevelt has been selected as one of 40 musicians around the world nominated to play <b>WOMEX</b>, the World Music Expo in Finland.</p>
    ),
    image: {
      url: '/assets/features/womex.jpg'
    },
    action: {
      text: <span>Visit Site</span>,
      url: 'http://www.womex.com/about/womex'
    }
  },
  {
    title: <span>Europe in Spring</span>,
    content: (
      <p>Planes trains and automobiles will take us from Tunisia, Germany, Sweeden, The Netherlands and all over Italy. I’ll be sending postcards. Make sure you’re following my Insta and FB.</p>
    ),
    image: {
      url: '/assets/tours/spring-europe.jpg'
    },
    action: {
      text: <span>Get Tickets <Icon fa="ticket"/></span>,
      url: '/tour'
    }
  },
  {
    title: <span><b><i>Exit 16</i></b> Released</span>,
    image: {
      position: '15% 50%',
      url: '/assets/exit-16.jpg'
    },
    accent: '#66754C',
    content: (
      <p>
        Get ready for the funk and boom.  Roosevelt’s debut album <i>Exit 16</i> is now available everywhere on GroundUP Music. A maestro known all over Miami as “The Dr.”, Roosevelt shines like a diamond on the all new <i>Exit 16</i>.
      </p>
    ),
    action: {
      text: <span>Check it out &nbsp; <Icon fa="angle-right"/></span>,
      url: '/music#exit16'
    }
  },
  {
    title: <span>Fresh tunes: <b style={{ whiteSpace: 'nowrap' }}><i>The Miami Sessions</i></b></span>,
    image: {
      position: '50% 20%',
      url: '/assets/miami-sessions-alt.jpg'
    },
    accent: '#302F2F',
    content: (
      <p>
        Recorded late at night with a full moon shining through the windows in a Miami basement. For a limited time, get an exclusive free MP3 download of this live EP.
      </p>
    ),
    action: {
      text: <span>Check it out &nbsp; <Icon fa="angle-right"/></span>,
      url: '/music#themiamisessions'
    }
  },
  {
    title: <span>New North U.S. Tour Dates Announced</span>,
    image: {
      url: '/assets/photos/wall-distant.jpg'
    },
    accent: '#a25a4a',
    content: (
      <p>
        Roosevelt Collier is going on tour all over the southeastern U.S., with dates also in California and New Jersey, playing your favorites from his stunning debut, <b><i>Exit 16</i></b>. See where and when he's coming to a city near you.
      </p>
    ),
    action: {
      text: <span>Check it out &nbsp; <Icon fa="angle-right"/></span>,
      url: '/tour'
    }
  },
  {
    title: <span>Let The Steel Play!</span>,
    image: {
      position: '50% 50%',
      url: '/assets/albums/let-the-steel-play.jpg'
    },
    accent: 'rgb(68, 71, 133)',
    content: (
      <p>
        Recorded late at night with a full moon shining through the windows in a Miami basement. For a limited time, get an exclusive free MP3 download of this live EP.
      </p>
    ),
    action: {
      text: <span>Check it out &nbsp; <Icon fa="angle-right"/></span>,
      url: '/music#letthesteelplay'
    }
  }
];

export default features;
