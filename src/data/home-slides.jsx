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
        <big>
          Debut Album <b>Available Now</b>
          <br />
          on GroundUP Music!
          <img src="/assets/gu-logo.png" className="logo-small" />
        </big>
        <p>
          Produced by Snarky Puppy’s Michael League.
        </p>
        <p className="white-text"><i>“This record is a record about me,” says Roosevelt Collier.<br/>“It’s telling a story of who I am, where I’m from, and where I’m going.”</i></p>
        <div className="row wrap">
          <a href="/music#exit16">
            <button>
              Listen Now &nbsp;<Icon fa="angle-right"/>
            </button>
          </a>
          <span> &nbsp; </span>
          <a href="/video">
            <button>
              Watch Now &nbsp;<Icon fa="angle-right"/>
            </button>
          </a>
        </div>
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
      position: '77% 40%',
      image: '/assets/photos/bokante-group.jpg'
    },
    content: (
      <div>
        <h1>"The Dr." meets Creole.</h1>

        <p style={{ maxWidth: '500px' }}>
          <i>File under</i>: world-music-blended polyrhythmic rocking soul.
        </p>
        <p style={{ maxWidth: '500px' }}>
          Roosevelt is a founding member of <b>Bokante</b>, the world music supergroup that's breaking down musical barriers.
        </p>

        <a href="http://www.bokante.com" target="_blank">
          <button>
            Check out Bokante &nbsp;<Icon fa="angle-right"/>
          </button>
        </a>
      </div>
    )
  },
  {
    id: 'let-the-steel-play',
    title: `Let The Steel Play`,
    linkTo: '/music#letthesteelplay',
    background: {
      image: '/assets/photos/with-andy-hall.jpg',
      position: '27% 40%'
    },
    accent: 'rgba(61, 61, 61, 0.8)',
    content: (
      <div>
        <h1>Let The Steel play</h1>
        <p style={{ maxWidth: '500px' }}>
          <i>Sacred Steel</i> meets bluegrass in this exploration of the Slide Guitar featuring Roosevelt & the Infamous StringDusters&apos; own <b>Andy Hall</b>.
        </p>
        <a href="/music#letthesteelplay">
          <button>
            Listen now <Icon fa="angle-right"/>
          </button>
        </a>
        <a href="/video#letthesteelplay">
          <button>
            Watch now <Icon fa="angle-right"/>
          </button>
        </a>
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
        <a href="/tour">
          <button>
            See Dates <Icon fa="calendar icon-right"/>
          </button>
        </a>
      </div>
    )
  }
];

export default homeSlides;
