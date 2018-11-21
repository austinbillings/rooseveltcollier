import React from 'react';

import Icon from 'components/icon';

const features = [
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
  }
];

export default features;
