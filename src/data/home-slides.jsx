import React from 'react';
import Icon from 'components/Icon';

const homeSlides = [
  {
    id: 'exit-16',
    title: 'Exit 16',
    linkTo: '/exit-16',
    accent: 'rgba(219,66,25,1)',
    slideClass: 'slide-light',
    background: {
      image: '/assets/photos/wall-tq.jpg',
      position: '90% 25%'
    },
    content: (
      <div className="stack items-start justify-end">
        <img
          src="assets/exit-16.jpg"
          alt="Cover of EXIT 16 by Roosevelt Collier"
          className="image-bordered"
          style={{ width: '200px' }}
        />
        <h1>Exit 16</h1>
        <big>Debut Album <b>Available Now</b></big>
        <p className="white-text"><i>“This record is a record about me,” says Roosevelt Collier.<br/>“It’s telling a story of who I am, where I’m from, and where I’m going.”</i></p>
        <button>
          Listen Now &nbsp;<Icon fa="angle-right"/>
        </button>
      </div>
    )
  },
  {
    id: 'bokante',
    title: 'Bokanté',
    slideClass: 'slide-shadowed',
    linkTo: '/music/bokante',
    accent: 'rgba(8, 72, 113, 1)',
    background: {
      position: '30% 40%',
      image: '/assets/photos/bokante-sessions.jpg'
    },
    content: (
      <div>
        <h1>"The Dr." meets Creole.</h1>
        <big>Check out <b>Bokanté</b>, the world music supergroup that's breaking down musical barriers.</big>
        <button>
          Check out Bokante &nbsp;<Icon fa="angle-right"/>
        </button>
      </div>
    )
  },
  {
    id: 'soul-of-miami',
    title: `Soul Of Miami`,
    linkTo: '/about',
    background: {
      image: '/assets/photos/hd.jpg',
      position: '43% 40%'
    },
    accent: 'rgba(61, 61, 61, 0.8)',
    content: (
      <div>
        <h1>SOUL OF MIAMI</h1>
        <p style={{ maxWidth: '800px' }}>Read about why Roosevelt Collier has been Miami's premiere genre-defying blues steel guitarist for years— and how working with Snarky Puppy's Michael League has breathed life into an all-new solo project from <i>The Dr.</i> himself.</p>
        <button>
          Learn more <Icon fa="angle-right"/>
        </button>
      </div>
    )
  },
  {
    id: 'on-tour',
    title: 'On Tour',
    linkTo: '/music/bokante',
    accent: 'rgba(147, 32, 49, 1)',
    background: {
      image: '/assets/photos/live.jpg',
      position: '50% center'
    },
    content: (
      <div>
        <h1>On Tour</h1>
        <big>Catch <i>The Dr.</i> when he comes to your city.</big>
        <button>
          See Dates <Icon fa="calendar icon-right"/>
        </button>
      </div>
    )
  }
];

export default homeSlides;
