import React from 'react';

import Icon from 'components/icon';
import LinkButton from 'components/link-button';
import SectionHeading from 'ui/section-heading';

const About = [
  {
    heading: <SectionHeading text="About" align="left" />,
    image: {
      url: '/assets/photos/soul.jpg',
      position: 'center center'
    },
    body: (
      <div>
        <p>Soft spoken by nature, South Florida-bred ROOSEVELT COLLIER does his hollering on the pedal steel guitar. Brought up in the "sacred steel" tradition of the House of God Church, Roosevelt built his reputation alongside his uncles and cousins in The Lee Boys, known for their spirited, soul-shaking live performances. Seated front and center, "The Dr." leaves an indelible mark on listeners, flooring audiences with his lightning-fast slide work on the pedal steel.</p>
        <p>At festivals, he is a regular "Artist at Large," performing alongside many of music's most prestigious acts, from the Allman Brothers, Tedeschi-Trucks, Los Lobos , the Del McCoury Band and countless others. In 2017, Roosevelt debuted his new project Bokanté - a "World Music All-Star Band" created by Snarky Puppy founder Michael League and featuring the vocals of Malika Tirolien.</p>
        <p>As a bandleader, Roosevelt leads his world famous "get-downs" featuring a mixture of "superstars and church folk", his own "Jimi Hendrix Experiment"-style all-star trio, and in 2018 has released the long-awaited Roosevelt Collier debut record, featuring an incredible mixture of blues, gospel, rock, and funk all rolled up by producer and bandmate Michael League.</p>
      </div>
    )
  },
  {
    image: {
      url: '/assets/photos/wall-distant.jpg',
      position: 'center 80%'
    },
    heading: (
      <row className="items-end">
        <SectionHeading text="Exit 16" align="left" color="white" />
        <div>
          <LinkButton className="btn-dark" href="https://open.spotify.com/album/02n4Aj3cImlUQe70gdTX43?si=OPlEWL9dTd61VposlFrc6A">
              Listen Now <Icon fa="chevron-circle-right icon-right"/>
          </LinkButton>
          <LinkButton className="btn-dark" href="https://store.groundupmusic.net/collections/bokante/products/strange-circles-mp3-download">
              Buy <Icon fa="chevron-circle-right icon-right"/>
          </LinkButton>
        </div>
      </row>
    ),
    body: (
      <div>
        <img src="/assets/exit-16.jpg" className="image-aside image-right image-bordered"/>
        <p>“This record is a record about me,” says Roosevelt Collier. “It’s telling a story of who I am, where I’m from, and where I’m going.”</p>
        <p>A transcendent talent on pedal and lap steel guitars — and so proficient, he’s affectionately known as “The Dr.” — Collier’s debut album Exit 16 on GroundUP Music is a potent mix of blues, gospel, rock and, in his words, “dirty funk swampy grime,” as overseen by producer and bandmate Michael League (from the Grammy-winning Snarky Puppy).</p>
        <p>It’s also a brilliant reflection of Collier’s life. All of it. Brought up in the House of God Church in Perrine, FL, Collier built his “sacred steel” guitar prowess alongside his uncles and cousins in The Lee Boys, known for their spirited, soul-shaking live performances. On his own, Collier’s become a sought-after talent both on record and on stage, performing alongside musical luminaries in the fields of rock, blues and pop, including the Allman Brothers, The String Cheese Incident, Buddy Guy, Umphrey's McGee, Los Lobos, Robert Randolph, the Tedeschi-Trucks Band, and the Del McCoury Band, among countless others. </p>
        <p>“Roosevelt channels something spiritual,” says League, who was instrumental in getting Collier to (finally) craft his own album after decades in the music scene.</p><p>“He’s a reason I’m talking about this now,” says Collier. “I’ve had offers to make my own music before. But when Mike came along, it just felt right.” </p><p>Exit 16 was recorded over three days of marathon sessions by League and a bevy of talented sidemen, including JT Thomas on drums and Bobby Sparks on organ. “You gotta be able to trust your bandmates, and Mike knew the right guys and knows what I’m about,” says Collier. “This could have been a star-studded thing. But that would have overshadowed what we wanted to do here.”</p>
        <p>And what Collier wanted to do was encapsulate all of influences and experiences. “I’m rooted in a lot of genres, so I’ve never really had a focus or to buckle down,” he says, laughing. So on Exit 16 you’ll find an infectious track like “Happy Feet” sitting happily nearby “Spike,” wherein Collier shreds with the spirit of Hendrix. “I actually think a song like ‘Spike’ is about my future,” says the guitarist. “My goal there was to see how we can expand this guitar, this steel.” And, reflecting on his early days, “Sun Up Sun Down” and “Supernatural” feel like joyous, spiritual workouts.</p>
        <p>And then there’s the title track, which Collier refers to as “dump truck funk.”  Says the musician: “That’s the old do-not-enter gate type of funk — it’s dangerous! Beware of dogs out there.” </p>
      </div>
    )
  }
];

export default About;
