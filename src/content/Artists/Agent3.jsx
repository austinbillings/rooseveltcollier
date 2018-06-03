import React from 'react';

export default {
  id: 'agent-3',
  name: 'Agent 3',
  memberStyle: 'across',
  members: [
    {
      name: <span>Tiger Claw (<strike>Alan Evans</strike>)</span>,
      on: 'Drums',
      photo: 'assets/bands/agent-3/members/tiger-claw.jpg',
      of: 'Soulive',
      id: 'alan-evans',
      bio: (
        <p>
          Alan Evans​ is an American multi­-instrumentalist, singer, songwriter, studio engineer, and record producer, whose "retro" style incorporates elements of rock, blues, soul, R&B, funk, jazz, reggae and the psychedelic. Evans is a founding member of Soulive, a genre bending organ trio that has toured the world sharing the stage with Stevie Wonder, The Rolling Stones, Dave Matthews Band, Chaka Kahn, and John Scofield, just to name a few. Alan, who was also the original drummer for Karl Denson’s Tiny Universe, has recently returned to playing with the band. Alan is also a highly sought after (recording/mixing) engineer and record producer. In addition to his own recording and touring, he has had the opportunity to travel and collaborate with bands and artists worldwide. His laid back style and vintage approach, makes it easy for him to bring his production aesthetic to a project while maintaining the artist’s character and vision.
        </p>
      )
    },
    {
      name: <span>Shadow Snake (<strike>DJ Williams</strike>)</span>,
      on: 'Guitar',
      photo: 'assets/bands/agent-3/members/shadow-snake.jpg',
      id: 'dj-williams',
      of: 'Karl Denson\'s Tiny Universe',
      bio: (
        <p>
          DJ Williams​ ​is an American guitarist, singer, and composer and founder of the funky Richmond based band, DJ Williams Projekt. He is also guitarist for San Diego’s critically acclaimed group, Karl Denson’s Tiny Universe. The young guitar player has toured the globe from small rock venues to large prestigious music festivals in the U.S., Canada, and Europe. DJ Williams’ blend of funk, rock, and soul always strives to push new boundaries with an emphasis on compelling melody, refined songwriting, and an extremely diverse musical palette. Just don’t let the name confuse you because this musician is laying out grooves any “DJ” would love to sample!
        </p>
      )
    },
    {
      name: <span>The Wolf (<strike>Darby Wolf</strike>)</span>,
      on: 'Hammond B3',
      photo: 'assets/bands/agent-3/members/the-wolf.jpg',
      of: 'Rubblebucket',
      id: 'darby-wolf',
      bio: (
        <p>
          Darby Wolf is a music educator and vintage keyboard enthusiast who performs on Hammond Organ, Clavinet, Moog and Rhodes. Over the past 15 years, he has toured with groups such as Rubblebucket, Akashic Record, and the Bomb Squad with Jen Durkin. Darby performed on Jimmy Kimmel Live, John Mayer's Mayercraft Carrier Cruise and at the 2012 Summer Olympics in London. He has played at many festivals, including Bonnaroo, High Sierra Music Festival, SXSW, Wakarusa, All Good Music Fest, Camp Bisco, and the Gathering of the Vibes. In 1992, he skated in the Ice Capades with Dorothy Hamill and Scott Hamilton.
        </p>
      )
    }
  ],
  tagline: (
    <p>
      On stage, <b><i>Agent 3</i></b> is a band that tours the world playing music for adoring fans. Off stage, <b><i>Agent 3</i></b> operating under Management, is band of spies that surgically eliminates secret governments, terrorist groups, corrupt politicians and evil spy organizations.
    </p>
  ),
  photos: {
    banner: 'assets/bands/agent-3/kickass.jpg',
    profile: 'assets/bands/agent-3/band.jpg'
  },
  city: 'Earth',
  links: {
    facebook: 'agent3music',
    instagram: 'agent3music',
    youtube: 'UC8l6jPFgA65pyhf6bM6WZeQ'
  },
  tracks: [
    {
      title: 'Mission Received',
      id: 'mission-received',
      record: 'Band Of Spies',
      artist: 'Agent 3',
      artistId: 'agent-3',
      cover: 'assets/bands/agent-3/band-of-spies.jpg',
      length: '2:01',
      url: 'assets/bands/agent-3/audio/01-mission-received.mp3'
    }
  ],
  bannerFocus: 'center 25%',
  bio: (
    <div>

      <blockquote className="subdued"><b><i>Agent 3</i></b> is the governmental code word for this collective of musical super heroes that have been saving the world through music (and weapons and mind tricks and super powers) for decades. While the name <b><i>Agent 3</i></b> always represents 3 top level Navy-Seal like Musical Assasins, it does not represent any one agent in particular. There are currently over 17 certified “Agent 3 Musical Assassins” and this story <i>“Band of Spies”</i> tracks 3 of them.</blockquote>
    </div>
  )
};
