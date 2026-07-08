import React from 'react';
import Icon from 'components/icon';
import LinkButton from 'components/link-button';

const homeSlides = [
  {
    id: 'on-tour',
    title: 'On Tour',
    linkTo: '/tour',
    accent: 'rgba(20, 40, 60, 1)',
    background: {
      image: '/assets/2026/optimized/band-stage-bw.jpg',
      position: '50% 30%'
    },
    content: (
      <div className="hero-collage-slide">
        <div className="hero-collage-grid">
          <img src="/assets/2026/optimized/roosevelt-warm-stage.jpg" alt="" />
          <img src="/assets/2026/optimized/jelly-bangor-fireworks.jpg" alt="" />
          <img src="/assets/2026/optimized/jelly-cma.jpg" alt="" />
          <img src="/assets/2026/optimized/jelly-wilmington-blue.jpg" alt="" />
        </div>
        <div className="hero-collage-panel">
          <h1>On Tour</h1>
          <big>Catch a show near you</big>
          <p>
            Roosevelt is on the road all over the world.
            <br/>See where he's headed next.
          </p>
          <LinkButton href="/tour">
            View tour dates <Icon fa="angle-right"/>
          </LinkButton>
        </div>
      </div>
    )
  },
  {
    id: 'emmons-signature',
    title: 'Signature Steel: Emmons',
    linkTo: 'https://www.emmonsguitar.co/sacredsteel',
    accent: 'rgba(140, 30, 30, 1)',
    background: {
      image: '/assets/2026/optimized/roosevelt-warm-stage.jpg',
      position: '50% 40%'
    },
    content: (
      <div>
        <h1>Signature Steel</h1>
        <big>An Emmons partnership.</big>
        <p style={{ width: '500px' }}>
          Roosevelt has partnered with <b>Emmons Guitar Co.</b> on a signature "Sacred Steel" pedal steel — a milestone honor from the makers of the instrument that raised him.
        </p>
        <LinkButton href="https://www.emmonsguitar.co/sacredsteel">
          See the Signature <Icon fa="angle-right"/>
        </LinkButton>
      </div>
    )
  },
  {
    id: 'eric-gales-ljk',
    title: 'A Tribute to LJK',
    linkTo: '/music#tribute-to-ljk',
    background: {
      image: '/assets/albums/tribute-to-ljk.jpg',
      position: '50% 50%'
    },
    accent: '#D4A574',
    content: (
      <span>
        <h1>Featured on Eric Gales' New Album</h1>
        <p style={{ width: '500px' }}>
          Roosevelt is featured on "Somebody," the closing track of Eric Gales' tribute to Little Jimmy King, alongside Buddy Guy.
        </p>
        <LinkButton href="/music#tribute-to-ljk">
          LISTEN NOW <Icon fa="angle-right"/>
        </LinkButton>
      </span>
    )
  },
  {
    id: 'sacred-steel',
    title: 'Sacred Steel',
    linkTo: '/about',
    accent: 'rgba(147, 32, 49, 1)',
    background: {
      image: '/assets/2026/optimized/band-stage-bw.jpg',
      position: '50% 30%'
    },
    content: (
      <div>
        <h1>Sacred Steel</h1>
        <big>Faith runs deep.</big>
        <p>
          Roosevelt came up through the church, it's in his blood, and deeply intertwined in his family roots.
          <br />
          From his grandfather Rev. Robert E. Lee, uncles Alvin, Keith, and Derrick Lee and cousins Earl Walker and Alvin Cordy, all of <b>The Lee Boys</b> fame, all paths lead back to Church.
        </p>
        <LinkButton href="/about">
          Learn more <Icon fa="angle-right"/>
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
      </div>
    )
  }
];

export default homeSlides;
