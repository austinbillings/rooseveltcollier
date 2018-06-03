import React from 'react';

import News from 'Content/News';
import Home from 'Content/Home';
import Icon from 'Components/Icon';
import Videos from 'Content/Video';
import NewsPanel from 'Ui/NewsPanel';
import VideoPanel from 'Ui/VideoPanel';
import TrackPanel from 'Ui/TrackPanel';
import Carousel from 'Components/Carousel';
import SignUpBanner from 'Ui/SignUpBanner';
import ShadowBox from 'Components/ShadowBox';
import SectionHeading from 'Ui/SectionHeading';

class HomePage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { Slides } = Home;
    let tracks = [];
    Slides = Slides.filter(s => !s.hidden);

    return (
      <grid className="HomePage">

        <SectionHeading text="Welcome" icon="home" />

        <ShadowBox outerClassName="CarouselWrapper">
          <Carousel slides={Slides} progressColor="transparent" autoScroll={true} />
        </ShadowBox>

        {/* <SectionHeading text="News" icon="headphones" />
        <ShadowBox outerClassName="NewsPanel-Wrapper">
          <NewsPanel articles={News} />
        </ShadowBox> */}

        <TrackPanel tracks={tracks} className="panel-spacing">
          <SectionHeading text="Listen" icon="headphones" />
        </TrackPanel>

        <ShadowBox outerClassName="panel-spacing">
          <SignUpBanner />
        </ShadowBox>

        <VideoPanel videos={Videos.list}>
          <SectionHeading text="Watch" icon="tv" />
        </VideoPanel>
      </grid>
    );
  }
}

export default HomePage;
