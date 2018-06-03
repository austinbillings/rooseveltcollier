import React from 'react';

import Icon from 'Components/Icon';
import VideoMenu from 'Components/VideoMenu';
import VideoPlayer from 'Components/VideoPlayer';
import ShadowBox from 'Components/ShadowBox';
import { autoWidth, autoFactor, colWidth, currentBreakpoint } from 'Utils/Breakpoints';

const ASPECT_RATIO = 0.5;

class VideoPanel extends React.Component {
  constructor (props) {
    super(props);
    let factor = ['xs','sm'].includes(currentBreakpoint()) ? 1 : 0.75;
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
    let factor = ['xs','sm'].includes(currentBreakpoint()) ? 1 : 0.75;
    let width = autoWidth() * factor;
    let height = autoFactor(ASPECT_RATIO) * factor;
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
    const { videos, children } = this.props;
    const { activeIndex, height, width } = this.state;
    const activeVideo = videos[activeIndex];

    return (
      <div className="VideoPanel">

        {children}

        <row>
          <box className="xs-12 md-9 player-box">
            {!activeVideo ? <h3>No Videos</h3> : (
              <ShadowBox className="player-wrapper">
                <VideoPlayer height={height} width={width} video={activeVideo} />
                <div className="player-meta">
                  <h3>
                    <span className="meta-artist">{activeVideo.artist} </span>
                    <span className="meta-title">{activeVideo.title}</span>
                  </h3>
                </div>
              </ShadowBox>
            )}
          </box>

          <box className="xs-12 md-3 list-box">
            <VideoMenu videos={videos} onChoose={this.switchToVideo} />
          </box>
        </row>

      </div>
    );
  }
};

export default VideoPanel;
