import React from 'react';

export default {
  id: 'crowd-company',
  name: 'Crowd Company',
  city: 'London, UK',
  links: {
    facebook: 'crowdcompanyfunk',
    twitter: 'crowdcofunk',
    instagram: 'crowdcompanyfunk',
    website: 'http://www.crowdcompanyfunk.com/'
  },
  tagline: (
    <div>
      <blockquote>“Excellent. Dirty, lowdown funk”   Craig Charles, BBC Radio 6</blockquote>
      <p>An 8-piece modern take on vintage soul funk. Brimming with energy and a raw edge, catchy hooks, and tight grooves. The band combines a retro Hammond organ-based sound with a virtuoso horn section, soulful lead, and harmony vocals.</p>
    </div>
  ),
  bannerFocus: 'center 5%',
  photos: {
    banner: 'assets/bands/crowd-company/bw-twotone.jpg',
    profile: 'assets/bands/crowd-company/graffiti-cropped.jpg'
  },
  bio: (
    <div>
      <p>The band evokes the spirit of 60s and early 70s funk as well as modern day funk jam bands whilst also focusing on strong soulful songwriting.</p>
      <p>Crowd Company are renowned for dynamic, engaging live performances. The band have drawn accolades from their musical peers and have shared the stage with the likes of George Porter Jr from The Meters, Daptone's Saun & Starr, Alan Evans Trio, The New Mastersounds, Monophonics</p>
      <p>A busy gigging, band Crowd Company regularly play some of the UK's prestigious venues including: The 100 Club, The Jazz Café, Brooklyn Bowl, 229, RichMix, Band On The Wall.</p>
      <p>Crowd Company release their new album ‘Stone & Sky' on the VLM label worldwide in September 2017 on vinyl, CD, online. The album was recorded at IronWax Studio, MA and was produced by Alan Evans (Soulive). </p>
    </div>
  ),
  tracks: [
    {
      title: 'Saw You Yesterday',
      record: 'Stone and Sky',
      id: 'saw-you-yesterday',
      length: '4:33',
      featured: true,
      artist: 'Crowd Company',
      artistId: 'crowd-company',
      url: 'assets/bands/crowd-company/audio/02-stone-and-sky.mp3',
      cover: 'assets/bands/crowd-company/stone-and-sky.jpg'
    }
  ],
  members: [
    { name: 'Rob Fleming', id: 'Rob Fleming', on: 'Vocals & Guitar' },
    { name: 'Emil Engstrom', id: 'Emil Engstrom', on: 'Bass' },
    { name: 'Claudio Corona', id: 'Claudio Corona', on: 'Keyboards' },
    { name: 'Chris Rand', id: 'Chris Rand', on: 'Sax' },
    { name: 'Henry Spencer', id: 'Henry Spencer', on: 'Trumpet' },
    { name: 'Robin Lowrey', id: 'Robin Lowrey', on: 'Drums' },
    { name: 'Esther Dee', id: 'Esther Dee', on: 'Backing Vocals' },
    { name: 'Jo Marshall', id: 'Jo Marshall', on: 'Backing Vocals' }
  ]
};
