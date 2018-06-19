import React from 'react';

import './VideoPanel.scss';
import Icon from 'components/Icon';
import VideoMenu from 'components/VideoMenu';
import VideoPlayer from 'components/VideoPlayer';
import ShadowBox from 'components/ShadowBox';
import { autoWidth, autoFactor, colWidth, currentBreakpoint } from 'Utils/Breakpoints';

const ASPECT_RATIO = 0.5;

class VideoPanel extends React.Component {
  constructor (props) {
    super(props);
    const factor = ['xs','sm','md'].includes(currentBreakpoint()) ? 1 : 0.75;
    this.state = {
      activeIndex: 0,
      width: autoWidth() * factor,
      height: autoFactor(ASPECT_RATIO) * factor
    };

    this.switchToVideo = this.switchToVideo.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions () {
    const factor = ['xs','sm'].includes(currentBreakpoint()) ? 1 : 0.75;
    const width = autoWidth() * factor;
    const height = autoFactor(ASPECT_RATIO) * factor;
    this.setState({ height, width });
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions);
  }

  switchToVideo (video, activeIndex) {
    this.setState({ activeIndex });
  }

  render () {
    const { videos: videoList, children, max } = this.props;
    const { activeIndex, height, width } = this.state;
    const videos = max ? videoList.slice(0, max) : videoList;
    const activeVideo = videos[activeIndex];

    return (
      <div className="video-panel">
        <div className="row">
          <div className="box xs-12 lg-9 player-box">
            {!activeVideo ? <h3>(No Videos)</h3> : (
              <div className="player-wrapper">
                <VideoPlayer height={height} width={width} video={activeVideo} />
              </div>
            )}
          </div>

          <div className="box xs-12 lg-3 list-box">
            <VideoMenu videos={videos} activeIndex={activeIndex} onChoose={this.switchToVideo} />
            {!children ? null : children}
          </div>
        </div>
      </div>
    );
  }
};

export default VideoPanel;
