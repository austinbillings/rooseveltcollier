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
      image: '/assets/2026/optimized/roosevelt-hat-bw.jpg',
      position: '50% 30%'
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
          Produced by Snarky Puppy's Michael League.
        </p>
        <p className="white-text">
          <i>"This record is a record about me," says Roosevelt Collier.<br/>"It's telling a story of who I am, where I'm from, and where I'm going."</i>
        </p>
        <LinkButton href="/music#exit16">
          Check it out &nbsp;<Icon fa="angle-right"/>
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
    id: 'the-dr',
    title: 'Roosevelt "The Dr." Collier',
    linkTo: '/about',
    background: {
      image: '/assets/2026/optimized/roosevelt-warm-stage.jpg',
      position: '50% 40%'
    },
    accent: 'rgba(180, 60, 30, 1)',
    content: (
      <span>
        <h1>Roosevelt "The Dr." Collier</h1>
        <p style={{ width: '500px' }}>
          A 4× Grammy-nominated pedal steel guitarist who cut his teeth in the church but plays like a back-road bluesman. Fronting his own band since 2012, he's torn up festivals and stages in over 50 countries.
        </p>
        <LinkButton href="/about">
          LEARN MORE <Icon fa="angle-right"/>
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
