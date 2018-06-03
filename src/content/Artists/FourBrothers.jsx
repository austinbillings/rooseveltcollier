import React from 'react';

export default {
  id: '4brothers',
  name: '4Brothers',
  featuring: (
    <p>Alan Evans & Neal Evans (Soulive) + Otiel Burbridge (Dead and Co, Allman Brothers, Aquarium Rescue unit) and Kufy Burbridge (Tedeschi Trucks Band)</p>
  ),
  tagline: (
    <p>Spiritual-Soul-Rock-Jazz. This is a concept record – put a pair of successful “brother” musicians together with another pair of successful brothers and see what happens.   This one has a buzz before a single note is released.</p>
  ),
  bannerFocus: 'center 10%',
  photos: {
    banner: 'assets/bands/4brothers/group-twotone.jpg',
    profile: 'assets/bands/4brothers/sitting.jpg'
  },
  bio: (
    <p>
      The Burbridge and Evans brothers have been running in the same musical circles since their first meeting in the early 90’s.  They have shared the stage over the years at many shows and festivals but always wanted to find time to do something together just as brothers.  A conversation on Jam Cruise between Oteil and Alan solidified the long standing idea of recording and playing together.  4Brothers was born at Iron Wax during an epic recording session.  Though the 4Brothers are busy sharing their individual talents and love with the world, they will always make time to get together to share their music as a family.
    </p>
  ),
  tracks: [
    {
      title: 'NO. 2',
      id: 'number-2',
      record: '4BROTHERS',
      artist: '4Brothers',
      artistId: '4brothers',
      cover: 'assets/bands/4brothers/4brothers.jpg',
      length: '4:42',
      featured: true,
      url: 'assets/bands/4brothers/audio/no-2.mp3'
    }
  ],
  memberStyle: 'across',
  members: [
    {
      name: 'Alan Evans',
      id: 'Alan Evans',
      of: 'Soulive',
      on: 'Drums',
      photo: 'assets/bands/4brothers/members/alan-evans-twotone.jpg'
    },
    {
      name: 'Neal Evans',
      id: 'Neal Evans',
      of: 'Lettuce, Soulive',
      on: 'Hammond B3',
      photo: 'assets/bands/4brothers/members/neal-evans-twotone.jpg'
    },
    {
      name: 'Otiel Burbridge',
      id: 'Otiel Burbridge',
      of: 'Allman Brothers Band, Dead & Company',
      on: 'Bass',
      photo: 'assets/bands/4brothers/members/otiel-burbridge-twotone.jpg'
    },
    {
      name: 'Kofi Burbridge',
      id: 'Kofi Burbridge',
      of: 'Tedeschi Trucks Band',
      on: 'Keys',
      photo: 'assets/bands/4brothers/members/kofi-burbridge-twotone.jpg'
    }
  ]
};
