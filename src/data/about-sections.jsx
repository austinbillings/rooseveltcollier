import React from 'react';

import Icon from 'components/icon';
import LinkButton from 'components/link-button';
import SectionHeading from 'ui/section-heading';

const About = [
  {
    heading: <SectionHeading text="About" align="left" />,
    image: {
      url: '/assets/2026/optimized/roosevelt-hat-bw.jpg',
      position: 'center center'
    },
    body: (
      <div>
        <p>
          Roosevelt "The Dr." Collier is a 4× Grammy-nominated pedal steel guitarist who cut his teeth in the church but plays like a back-road bluesman. Fronting his own band since 2012, he's torn up festivals and stages in over 50 countries. Served as Music Director for Jelly Roll, and his debut album <i>Exit 16</i> distills blues, gospel, and funk into pure fire.
        </p>
      </div>
    )
  },
  {
    image: {
      url: '/assets/2026/optimized/jelly-bangor-solo.jpg',
      position: 'center 40%'
    },
    heading: (
      <row className="items-end">
        <SectionHeading text="Exit 16" align="left" color="white" />
        <div>
          <LinkButton className="btn-dark" href="https://open.spotify.com/album/02n4Aj3cImlUQe70gdTX43?si=OPlEWL9dTd61VposlFrc6A">
            Listen Now <Icon fa="chevron-circle-right icon-right"/>
          </LinkButton>
        </div>
      </row>
    ),
    body: (
      <div>
        <img src="/assets/exit-16.jpg" className="image-aside image-right image-bordered"/>
        <p>“This record is a record about me,” says Roosevelt Collier. “It's telling a story of who I am, where I'm from, and where I'm going.”</p>
        <p>Collier's debut album <i>Exit 16</i> on GroundUP Music is a potent mix of blues, gospel, rock and, in his words, “dirty funk swampy grime,” as overseen by producer and bandmate Michael League (from the Grammy-winning Snarky Puppy).</p>
      </div>
    )
  }
];

export default About;
