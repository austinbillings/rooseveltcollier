import React from 'react';

import './HomePage.scss';
import socials from 'meta/Socials';
import Urls from 'meta/Urls';

import videos from 'data/videos';
import features from 'data/features';

import Icon from 'components/Icon';
import Nobr from 'components/Nobr';
import SlidePanel from 'components/SlidePanel';

import CardList from 'ui/CardList';
import SocialNav from 'ui/SocialNav';
import VideoPanel from 'ui/VideoPanel';
import SectionHeading from 'ui/SectionHeading';
import NewsletterSignup from 'ui/NewsletterSignup';

import slides from 'data/home-slides';

class HomePage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="page home-page">
        {/* SLIDE PANEL */}
        <SlidePanel slides={slides}>
          <SocialNav socials={socials}/>
        </SlidePanel>

        {/* SIGNUP */}
        <div className="row black-bg items-center">
          <div className="grid space-between black-bg">
            <div className="xs-12 lg-5 text-center">
              <NewsletterSignup/>
            </div>
            <div className="xs-12 lg-7 text-center">
              <p className="newsletter-signup-caption">
                <Nobr className="orange-text">Be the first to get updates </Nobr>
                <Nobr>about Roosevelt Collier’s releases, tours, and more.</Nobr>
              </p>
            </div>
          </div>
        </div>


        {/* VIDEO SECTION */}
        <SectionHeading text="Watch Now"/>
        <div className="grid">
          <VideoPanel videos={videos} max={3}>
            <a href={Urls.video.index}>
              <button className="btn-center">See All &nbsp; <Icon fa="angle-right"/></button>
            </a>
          </VideoPanel>
        </div>

        {/* FEATURES SECTION */}
        <SectionHeading text="Features"/>
        <div className="grid">
          <CardList list={features}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
