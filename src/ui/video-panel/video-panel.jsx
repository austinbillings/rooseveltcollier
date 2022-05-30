import React from 'react';

import './video-panel.scss';
import Icon from 'components/icon';
import ShadowBox from 'components/shadow-box';

import VideoMenu from 'components/video-menu';
import VideoGallery from 'ui/video-gallery';
import { autoWidth, autoFactor, colWidth, currentBreakpoint } from 'utils/breakpoints';

class VideoPanel extends VideoGallery {
  constructor (props) {
    super(props);
  }

  getVideoWidth () {
    const factor = ['xs','sm','md'].includes(currentBreakpoint()) ? 1 : 0.75;
    return autoWidth() * factor;
  }

  getVideoHeight () {
    const { aspectRatio } = this.props;
    const width = this.getVideoWidth();

    return width * aspectRatio;
  }


  renderContent (videoPlayer) {
    const { activeIndex } = this.state;
    const { videos: videoList, children, max } = this.props;
    const videos = max ? videoList.slice(0, max) : videoList;

    return (
      <div className="video-panel">
        <div className="box xs-12 lg-9 player-box" style={{ flexGrow: 1 }}>
          <div className="player-wrapper">
            {videoPlayer}
          </div>
        </div>
        <div className="box xs-12 lg-3 list-box">
          <VideoMenu videos={videos} activeIndex={activeIndex} onChoose={this.switchToVideo} />
          {!children ? null : children}
        </div>
      </div>
    );
  }
};

export default VideoPanel;
