import React from 'react';
import { Link } from 'react-router-dom';

import Urls from 'Meta/Urls';
import Icon from 'Components/Icon';
import CardOverlay from 'Components/CardOverlay';
import Overlay from 'Components/Overlay';

const Home = {
  Slides: [
    {
      url: 'http://radi.al/CrowdCompanySSITunes',
      content: (
        <row className="Slide StoneSkySlide">
          <box className="xs-12 sm-6 right-side">
            <Overlay image={'/assets/bands/crowd-company/stone-and-sky.jpg'} position={'top right'} />
          </box>
          <box className="xs-12 sm-6 left-side blue-bg stack justify-center p30">
            <h4>Available Now</h4>
            <h2>Stone And Sky</h2>
            <strong className="drop10">the all new album from <span className="med-gray">Crowd Company</span></strong>
            <div>
              <button className="sleek caps">Get It Now</button>
              <button className="attache gold-bg"><Icon fa="arrow-right" /></button>
            </div>
          </box>
        </row>
      )
    },
    {
      url: '/about',
      content: (
        <row className="Slide WelcomeSlide">
          <box className="xs-12 sm-6 left-side">
            <h3>Welcome to</h3>
            <img src="assets/vl.svg" alt="Vintage League Music (Logo)" />
            <span className="action-area">
              <button className="sleek caps">What we're all about</button>
              <button className="attache"><Icon fa="arrow-right" /></button>
            </span>
          </box>

          <box className="xs-12 sm-6 right-side">
            <CardOverlay align="left">
              <h4>An All New Record Label</h4>
              <p>
                From mastermind and <b>Soulive</b> drummer Alan Evans.
                <br />
                This is <span className="b black">Vintage League.</span>
              </p>
            </CardOverlay>
          </box>
        </row>
      )
    },
    {
      hidden: true,
      url: '/features/agent-3-comic',
      content: (
        <row className="Slide ComicSlide">
          <box className="xs-12">
            <CardOverlay align="left" className="white-bg black">
              <h3 className="w100">Agent 3: Band Of Spies</h3>
              <h4>Official Comic VOLUME 1</h4>
              <p><span className="b">Read it now <Icon fa="arrow-right ml5" /></span></p>
            </CardOverlay>
          </box>
        </row>
      )
    },
    {
      hidden: false,
      url: '/features/taking-a-break',
      content: (
        <row className="Slide BreakSlide">
          <box className="xs-12">
            <CardOverlay align="center" className="black-bg tc">
              <img alt="TAKING A BREAK AT IRON WAX: Alan Evans seated at a drum kit" src="assets/features/taking-a-break.png" className="full max550 drop10" />
              <h3 className="w100">FREE Drum Breaks from <b>Alan Evans</b>.</h3>
              <p>Use them in a project and we might share it with the world.
                <span className="b gold"> Check it out <Icon fa="angle-double-right ml5" /></span>
              </p>
            </CardOverlay>
          </box>
        </row>
      )
    }
  ]
};

export default Home;
