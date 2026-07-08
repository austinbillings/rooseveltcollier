import React from 'react';

import { scrollTo } from 'utils/dom';
import VideoGallery from 'ui/video-gallery';
import VideoMenu from 'components/video-menu';

class VideoShowcase extends VideoGallery {
  constructor (props) {
    super(props);

    this.state = {
      activeIndex: 0,
      targetVideo: props.targetVideo
    };

    this.onChoose = this.onChoose.bind(this);
  }

  componentDidUpdate (prevProps) {
    if (prevProps.targetVideo === this.props.targetVideo) return;

    const { videos, targetVideo } = this.props;
    const foundIndex = videos.findIndex(vid => vid.id && vid.id === targetVideo);
    this.setState({ activeIndex: foundIndex });
  }

  onChoose (...args) {
    this.switchToVideo(...args);

    scrollTo('html,body', 80);
  }

  renderContent (videoPlayer) {
    const { videos } = this.props;
    const { activeIndex } = this.state;

    return (
      <div className="video-showcase">
        {videoPlayer}
        <grid>
          <div className="video-showcase-list">
            <VideoMenu
              videos={videos}
              activeIndex={activeIndex}
              onChoose={this.onChoose}
            />
          </div>
        </grid>
      </div>
    );
  }
};

export default VideoShowcase;
