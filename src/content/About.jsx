import React from 'react';

const About = {
  panes: [
    {
      heading: <img src="assets/vl-color.png" alt="Vintage League Music (logo)" className="logo-text" />,
      body: (
        <div>
          <p><b className="orange">Vintage League Records</b> is a <b>Studio 1200</b> imprint run by <b>Soulive’s</b> <b className="gold">Alan Evans</b> to bring his many influences and musical worlds together in one place for music fans worldwide to see and hear.</p>
          <p>Being a veteran of the music touring and recording business, Alan has seen many changes in the music business and has always strived to be at the front of these changes.   Many advances have been made in the recording and music distribution technologies and Vintage League Records believes in embracing these new ways of producing music while staying true to a tradition born in the era of the 45. </p>
          <p>Vintage League pays homage to a time when a great effort was placed on writing, recording and producing great songs, many of which were released days after the recording session ended. This helped keep the music fresh for the artists and the listeners while keeping everyone engaged and wanting more.</p>
          <p>Vintage League Records is committed to releasing high quality, soulful music that will help add to a growing community of independent artists and listeners striving to feed the music revolution of the 21st century, one song at a time.</p>
        </div>
      ),
      photo: 'assets/city-logo.jpg'
    },
    {
      className: 'about-alan',
      heading: <h2><small>About</small> <span className="gold">Alan Evans</span></h2>,
      body: (
        <div>
          <p><em>Multi Instrumentalist. Producer. Engineer.</em> At his core, Alan Evans is an artist, doubling his talents as musician with his ear for quality and precision as a producer, recording, and mixing engineer. Sporting an impressive body of work, (with credits in front of and behind the mic) a slice of Alan’s discography includes: <b>Soulive, Karl Denson’s Tiny Universe, Toots and the Maytalls, Alan Evans Trio and Moonboot Lover</b>. Mention the name <b>Alan Evans</b> to a room full of music lovers, and you will get a consensus nod at one of the most celebrated and tenacious drummers in the jazz, funk, and soul scene.</p>
          <p>A producer, recording engineer, guitarist, percussionist, vocalist and writer, Alan’s repertoire of skills have been perfected with two decades of dedication. Alan has had his hand on the mixing boards for many years. Co-founder, writer and drummer of Soulive for over 15 years, Alan Evans co-produced, recorded, and mixed the majority of their work. Alan still tours the world with Soulive, and has shared the stage with legends including <b>Stevie Wonder, Chaka Khan, Dave Matthews, John Scofield,</b> and the list goes on!</p>
          <p>When off the road, Alan is the chief engineer and producer at Iron Wax staying busy recording / mixing and producing a wide array of projects. The studio is also production headquarters for Vintage Leauge Music.</p>
          <p>Alan grew up in Buffalo, NY in the 1980’s. There were strong musical influences in Alan’s life from the very beginning. To say that the Evans family is musical is to say that the Kennedy family has a proclivity for politics. The record player spun in the Evans household the way the TV blared in many other homes. Alan’s father, Willie, and his older brother Rod played DJ and the assembly of vinyl they accrued was broad and vast. Miles Davis, Jimmy Smith, Ray Charles, Joe Cocker, Kool & the Gang, Jimi Hendrix, the Headhunters – these were just some of the sounds emanating out of the Evans living room.</p>
          <blockquote className="subdued">“First and foremost, I am a music lover. There is nothing better than discovering and falling in love with a new song or album. Something that you put on repeat and listen to for hours, days, weeks. Music that transports you to another world, a place meant just for you. This is what drives me to make music and help others bring their music to fruition.” </blockquote>
        </div>
      ),
      photo: 'assets/photos/street.jpg'
    },
    {
      heading: <h2><small>About</small> Iron Wax Studios</h2>,
      body: (
        <div>
          <h4 className="w300 gold drag10">Iron Wax is the sonic home of Vintage League Music.</h4>
          <p>Iron Wax is an analog / digital hybrid studio in Western Massachusetts run by Alan Evans. The studio features a wonderful sounding 40 channel Amek recording console, Burl Audio, Lynx Aurora, Tascam conversion, Pro Tools 12 and Handsome Audio’s Zulu (the world’s first passive analog tape simulator). We also have a great collection of new and vintage microphones, amps and instruments. Most importantly, Iron Wax has a great vibe and a very experienced engineer / producer in Alan Evans.</p>
          <p>Learn more <a href="http://ironwax.com" target="_blank">at IronWax.com</a></p>
        </div>
      ),
      photo: 'assets/photos/console-cropped.jpg'
    }
  ]
};

export default About;
