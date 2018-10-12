import React from 'react';

import { scrollTo } from 'utils/Dom';
import VideoGallery from 'ui/VideoGallery';
import VideoMenu from 'components/VideoMenu';

class VideoShowcase extends VideoGallery {
  constructor (props) {
    super(props);

    this.onChoose = this.onChoose.bind(this);
  }

  onChoose (...args) {
    scrollTo('html,body', 80);
    this.switchToVideo(...args);
  }

  renderContent (videoPlayer) {
    const { videos } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="video-showcase">
        {videoPlayer}
        <grid>
          <div className="video-showcase-list">
            <VideoMenu videos={videos} activeIndex={activeIndex} onChoose={this.onChoose}/>
          </div>
        </grid>
      </div>
    );
  }
};

export default VideoShowcase;
