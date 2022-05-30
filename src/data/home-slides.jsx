import React from 'react';
import Icon from 'components/icon';
import LinkButton from 'components/link-button';

const homeSlides = [
  {
    id: '2021-tour',
    title: 'LIVE in 2021',
    linkTo: '/tour',
    background: {
      image: '/assets/2022/image0-cropped.jpg',
      position: '50% 50%'
    },
    accent: '#261243',
    content: (
      <span>
        <h1>Europe Summer Tour 2022</h1>
        <p style={{ width: '500px' }}>
          Just announced: a dozen new tour dates across Europe this July. Get your tickets now!
        </p>
        <LinkButton href="/tour">
          SEE DATES <Icon fa="angle-right"/>
        </LinkButton>
      </span>
    )
  },
  // {
  //   id: 'womex-announcement',
  //   title: `Live at WOMEX`,
  //   linkTo: 'http://www.womex.com/about/womex',
  //   background: {
  //     image: '/assets/features/womex.jpg',
  //     position: '50% 50%'
  //   },
  //   accent: 'rgba(98, 21, 75, 0.81)',
  //   content: (
  //     <div>
  //       <h1>WOMEX</h1>
  //       <p style={{ width: '500px' }}>
  //         Roosevelt was been selected as one of 40 musicians around the world nominated to play <b>WOMEX</b>, the World Music Expo in Finland for 2019.
  //       </p>

  //       <LinkButton href="http://www.womex.com/">
  //         Learn more <Icon fa="angle-right"/>
  //       </LinkButton>

  //       <span> &nbsp; </span>

  //       <LinkButton href="http://www.womex.com/take_part/register">
  //         Get Tickets <Icon fa="angle-right"/>
  //       </LinkButton>
  //     </div>
  //   )
  // },
  // {
  //   id: 'ukj-baoty2019',
  //   linkTo: '',
  //   accent: 'rgb(27,154,209)',
  //   title: <span>Blues Artist of the year</span>,
  //   content: (
  //     <div>
  //       <img src="/assets/features/jazz-fm-blues-act-of-the-year-2019-nominee.jpg" style={{ maxWidth: '100%' }} />
  //       <p style={{ width: '500px' }}>Roosevelt has been nominated for the 2019 UK Jazz FM Award for <b>Blues Artist of the Year</b>, alongside fellow artists Eric Bibb and Errol Linton.</p>
  //       <LinkButton href="https://www.jazzfm.com/news/music-news/jazz-fm-awards-2019-nominees-announced/">
  //         See all nominees
  //       </LinkButton>
  //     </div>
  //   ),
  //   background: {
  //     image: '/assets/features/jazz-fm-blues-act-of-the-year-2019-bg.jpg',
  //     position: '40% 60%'
  //   }
  // },
  {
    id: 'exit-16',
    title: 'Exit 16',
    linkTo: '/exit-16',
    accent: 'rgba(219,66,25,1)',
    slideClass: 'slide-light',
    background: {
      image: '/assets/photos/wall-tq-altered.jpg',
      position: '90% 25%'
    },
    content: (
      <div className="stack items-start justify-end nowrap">
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
          <div className="logo-gu-small" />
        </big>
        <p>
          Produced by Snarky Puppy’s Michael League.
        </p>
        <p className="white-text">
          <i>“This record is a record about me,” says Roosevelt Collier.<br/>“It’s telling a story of who I am, where I’m from, and where I’m going.”</i>
        </p>
        <LinkButton href="/music#exit16">
          Check it out &nbsp;<Icon fa="angle-right"/>
        </LinkButton>
      </div>
    )
  },
  {
    id: 'bokante',
    title: 'Bokanté',
    slideClass: 'slide-shadowed',
    linkTo: '/music/bokante',
    hidden: true,
    accent: 'rgba(8, 72, 113, 1)',
    background: {
      position: '77% 25%',
      image: '/assets/photos/bokante-group.jpg'
    },
    content: (
      <div>
        <h1>"The Dr." meets Creole.</h1>

        <p style={{ width: '500px' }}>
          <i>File under</i>: world-music-blended polyrhythmic rocking soul.
        </p>
        <p style={{ width: '500px' }}>
          Roosevelt is a founding member of <b>Bokante</b>, the world music supergroup that's breaking down musical barriers.
        </p>

        <LinkButton href="http://www.bokante.com">
          Check out Bokante &nbsp;<Icon fa="angle-right"/>
        </LinkButton>

        <span> &nbsp; </span>

        <LinkButton href="http://www.bokante.com/#!/tour">
          Tour Dates &nbsp;<Icon fa="calendar"/>
        </LinkButton>
      </div>
    )
  },/*
  {
    id: 'live-at-montreaux',
    title: 'Live at Montreaux',
    linkTo: '/music/bokante',
    accent: 'rgba(211,131,60, 0.75)',
    background: {
      image: '/assets/photos/live-at-montreaux.jpg',
      position: '45% 40%'
    },
    content: (
      <div>
        <h1>Live At Montreaux</h1>
        <big>Watch the exclusive live set now!</big>
        <p>
          Roosevelt’s touring bands vary from three-piece to four-piece and the RCB is always on tour. The day after Roosevelt's debut at Montreaux, the Festival team asked to record a session live at the "House of Jazz" on the balcony.
        </p>

        <LinkButton href="/video?vid=liveatmontreaux">
          Watch Now &nbsp;<Icon fa="play"/>
        </LinkButton>

        <span> &nbsp; </span>

        <LinkButton href="/video?vid=liveatpastestudios">
          Watch RCB Live at Paste Studios &nbsp;<Icon fa="play"/>
        </LinkButton>
      </div>
    )
  }*/
  {
    id: 'sacred-steel',
    title: 'Sacred Steel',
    linkTo: '/about',
    accent: 'rgba(147, 32, 49, 1)',
    background: {
      image: '/assets/photos/live.jpg',
      position: '50% 50%'
    },
    content: (
      <div>
        <h1>Sacred Steel</h1>
        <big>Faith runs deep.</big>
        <p>
          Roosevelt came up through the church, it’s in his blood, and deeply intertwined in his family roots.
          <br />
          From his grandfather Rev. Robert E. Lee, uncles Alvin, Keith, and Derrick Lee and cousins Earl Walker and Alvin Cordy, all of <b>The Lee Boys</b> fame, all paths lead back to Church.
        </p>
        <LinkButton href="/about">
          Learn more <Icon fa="angle-right"/>
        </LinkButton>
      </div>
    )
  }
];

export default homeSlides;
