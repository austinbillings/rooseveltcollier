import React from 'react';

export default {
  id: 'roland-blackrock',
  name: 'Roland Blackrock',
  bannerFocus: 'center 65%',
  photos: {
    banner: 'assets/bands/roland-blackrock/back-art.jpg',
    profile: 'assets/bands/roland-blackrock/front-art.jpg'
  },
  tagline: (
    <p>Black Rock from the blackest rocker on the scene – <i>Roland</i> Blackrock. Soulive's Alan Evans goes (sort of) under cover to create a Lenny-Kravitz-meets-Sly-Stone style Masterpiece.</p>
  ),
  bio: (
    <p><big>Roland Blackrock is an album written and recorded by Alan Evans inspired by his musical and life influences.  Though Alan played the majority of instruments on this album, he brought in his brother Neal Evans, Danny Mayer, Kris Yunker, Beau Sasser and Darby Wolf to go along on this journey.</big></p>
  ),
  tracks: [
    {
      title: 'Buffalo',
      id: 'buffalo',
      artist: 'Alan Evans',
      featured: true,
      artistId: 'roland-blackrock',
      record: 'The World According To Roland Blackrock',
      cover: 'assets/bands/roland-blackrock/cover-alt.jpg',
      url: 'assets/bands/roland-blackrock/audio/01-buffalo.mp3',
      length: '4:30'
    }
  ]
};
