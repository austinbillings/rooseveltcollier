import React from 'react';
import Icon from 'components/Icon';

const features = [
  {
    title: <span><b><i>Exit 16</i></b> Released</span>,
    image: {
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
    title: <span>New North American Tour Dates Announced</span>,
    image: {
      url: '/assets/photos/wall-distant.jpg'
    },
    accent: '#DA5234',
    content: (
      <p>
        Roosevelt Collier is going on tour all over the U.S. and playing your favorites from the upcoming album, <b><i>Exit 16</i></b>. See where and when he's coming to a city near you.
      </p>
    ),
    action: {
      text: <span>Check it out &nbsp; <Icon fa="angle-right"/></span>,
      url: '/tour'
    }
  },
  {
    title: <span>Fresh tunes: <b style={{ whiteSpace: 'nowrap' }}><i>The Miami Sessions</i></b></span>,
    image: {
      url: '/assets/miami-sessions-alt.jpg'
    },
    accent: '#302F2F',
    content: (
      <p>
        Recorded in a
      </p>
    ),
    action: {
      text: <span>Check it out &nbsp; <Icon fa="angle-right"/></span>,
      url: '/music#themiamisessions'
    }
  }
];

export default features;
