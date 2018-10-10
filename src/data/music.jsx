import React from 'react';

export default [
  {
    title: 'Exit 16',
    subtitle: 'Now Available',
    releaseDate: '2018-03-09',
    image: '/assets/exit-16.jpg',
    links: [
      {
        text: 'Buy MP3',
        url: 'https://store.groundupmusic.net/collections/roosevelt-collier/products/exit-16-mp3-download'
      },
      {
        text: 'Buy Vinyl',
        url: 'https://store.groundupmusic.net/collections/roosevelt-collier/products/exit-16-vinyl'
      },
      {
        text: 'Buy FLAC',
        url: 'https://store.groundupmusic.net/collections/roosevelt-collier/products/exit-16-flac-download'
      },
    ],
    content: (
      <div>
        <blockquote>“My mission is touch and heal people through music [...] That’s always been my mission, whether it’s in the church or in a club. I think people feel better about themselves after I play. That’s powerful, my man! I’ve been blessed to have that going for me. That’s my gift.”</blockquote>
      </div>
    ),
    tracks: [
      { title: 'Sun Up Sun Down', length: '5:27' },
      { title: 'Happy Feet', length: '6:03' },
      { title: 'Make It Alright', length: '6:53' },
      { title: 'Exit 16', length: '6:05' },
      { title: 'That Could\'ve Been Bad', length: '8:06' },
      { title: 'Supernatural Encounters', length: '4:28' },
      { title: 'Spike', length: '8:37' },
    ],
    credits: [
      { name: 'Roosevelt Collier', part: 'Lap Steel Guitar' },
      { name: 'Michael League', part: 'Bass, Producer' },
      { name: 'Bobby Sparks II', part: 'Organ' },
      { name: 'Jason JT Thomas', part: 'Drums' }
    ]
  },
  {
    title: 'Strange Circles',
    subtitle: <span>with <b>Bokanté</b></span>,
    releaseDate: '2017-06-09',
    image: '/assets/strange-circles-small.jpg',
    credits: [
      { name: 'Roosevelt Collier', part: 'Lap Steel Guitar' },
      { name: 'Malika Tirolien', part: 'Vocals' },
      { name: 'Michael League', part: 'Baritone Guitar' },
      { name: 'Bob Lanzetti', part: 'Guitar' },
      { name: 'Chris McQueen', part: 'Guitar' },
      { name: 'André Ferrari', part: 'Percussion' },
      { name: 'Jamey Haddad', part: 'Percussion' },
      { name: 'Keita Ogawa', part: 'Percussion' },
    ],
    content: (
      <div>
        <p>Featuring <b>Roosevelt Collier</b> on Lap Steel guitar, the band’s debut goes from Zeppelin-esque blues stomp to folkloric Caribbean kaladja over the course its ten tracks, blending the extensive and varied knowledge of the individual players with a strong, yet empathetic, lyrical approach. Through it all, Bokanté is a vibrant image of what it wishes to see in the world: connection, unity, and love- through exchange.</p>
      </div>
    ),
    tracks: [
      { title: 'Jou Ké Ouvè' },
      { title: 'Nou Tout Sé Yonn' },
      { title: 'Ola' },
      { title: 'Zyé Ouvè, Zyé Fèmé' },
      { title: 'Roudesann' },
      { title: 'Limyè' },
      { title: 'An Ni Chans ' },
      { title: 'Apathie Mortelle' },
      { title: 'Vayan' },
      { title: 'Héritier' }
    ],
    links: [
      {
        text: 'Buy DVD',
        url: 'https://store.groundupmusic.net/collections/bokante/products/strange-circles-dvd'
      },
      {
        text: 'Buy Vinyl',
        url: 'https://store.groundupmusic.net/collections/bokante/products/strange-circles-vinyl'
      },
      {
        text: 'Buy CD',
        url: 'https://store.groundupmusic.net/collections/bokante/products/strange-circles-cd'
      },
      {
        text: 'Buy MP3',
        url: 'https://store.groundupmusic.net/collections/bokante/products/strange-circles-mp3'
      }
    ]
  },
  {
    title: 'The Miami Sessions',
    subtitle: 'Recorded live on February 7, 2017',
    image: '/assets/miami-sessions-alt.png',
    credits: [
      { name: 'Roosevelt Collier', part: 'Pedal Steel Guitar' },
      { name: 'Michael League', part: 'Bass' },
      { name: 'Dave "Lil Dave" Chiverton', part: 'Drums' },
      { name: 'Vaughn Henry', part: 'Organ' }
    ],
    content: (
      <div>
        <p>All tracks recorded live in studio by "DJ Le Spam" Yeomanson at City of Progress Studio in Miami, Florida on February 7<sup>th</sup> 2017 late late at night with a full moon shining through the windows. Mixed by Brendan Monahan at Miner Street Recording, Philadelphia.</p>
      </div>
    ),
    tracks: [
      { title: 'Exit 16', length: '4:15' },
      { title: 'Summer Rose', length: ' 6:22' },
      { title: 'Happy Feet', length: ' 5:16' },
    ]
  }
];
