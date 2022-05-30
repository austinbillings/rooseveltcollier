import React from 'react';

import './home-page.scss';
import socials from 'meta/socials';
import Urls from 'meta/urls';

import videos from 'data/videos';
import features from 'data/features';
import slides from 'data/home-slides';

import Icon from 'components/icon';
import Nobr from 'components/nobr';
import LinkButton from 'components/link-button';
import SlidePanel from 'components/slide-panel';

import CardList from 'ui/card-list';
import SocialNav from 'ui/social-nav';
import VideoPanel from 'ui/video-panel';
import SectionHeading from 'ui/section-heading';
import NewsletterSignup from 'ui/newsletter-signup';
import TourPanel from 'views/tour-page/tour-panel';
import BandsintownWidget from 'ui/bandsintown-widget';


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
                <span className="orange-text">Be the first to get updates </span>
                <span>about Roosevelt Collier’s releases, tours, and more.</span>
              </p>
            </div>
          </div>
        </div>

        <SectionHeading text="Upcoming Shows"/>
        <BandsintownWidget limit="5" style={{ maxWidth: 1280, margin: '0 auto' }} />
          {/*<div className="xs-12 md-6 md-offset-3">
            <img src="/assets/tours/summer-uk-2019.jpg" style={{ maxWidth: '90%', margin: '5px auto', border: '4px solid white', boxSizing: 'border-box' }} />
          </div>*/}



        {/* VIDEO SECTION */}
        <SectionHeading text="Watch Now"/>
        <div className="grid">
          <VideoPanel videos={videos} max={3}>
            <a href={Urls.video.index}>
              <button className="btn-center">See More &nbsp; <Icon fa="angle-right"/></button>
            </a>
          </VideoPanel>
        </div>

        {/* FEATURES SECTION */}
        <SectionHeading text="Features"/>
        <div className="grid">
          <CardList axis="y" max={3} list={features}/>
        </div>
      </div>
    );
  }
}

export default HomePage;
