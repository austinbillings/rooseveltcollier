import React from 'react';

import VideoMenu from 'components/VideoMenu';
import VideoPlayer from 'components/VideoPlayer';
import { autoWidth, autoFactor, colWidth, currentBreakpoint } from 'Utils/Breakpoints';

class VideoGallery extends React.Component {
  constructor (props) {
    super(props);

    this.switchToVideo = this.switchToVideo.bind(this);
    this.getVideoWidth = this.getVideoWidth.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.getVideoHeight = this.getVideoHeight.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.renderVideoPlayer = this.renderVideoPlayer.bind(this);

    this.state = {
      activeIndex: 0,
      width: 0,
      height: 0
    }
  }

  switchToVideo (video, activeIndex) {
    this.setState({ activeIndex });
  }

  componentDidMount () {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions () {
    const width = this.getVideoWidth();
    const height = this.getVideoHeight();

    this.setState({ height, width });
  }

  getVideoWidth () {
    return window.innerWidth; //autoWidth();
  }

  getVideoHeight() {
    const { aspectRatio } = this.props;
    const width = this.getVideoWidth();

    return width * aspectRatio;
  }

  renderVideoPlayer () {
    const { videos } = this.props;
    const { height, width, activeIndex } = this.state;
    const activeVideo = videos[activeIndex];
    return !activeVideo
      ? null
      : <VideoPlayer height={height} width={width} video={activeVideo} />
  }

  renderContent (videoPlayer) {
    const { videos } = this.props;
    const { activeIndex, width, height } = this.state;
    return !videoPlayer || !width || !height ? null : (
      <div>
        {videoPlayer}
        <VideoMenu videos={videos} activeIndex={activeIndex} onChoose={this.switchToVideo} />
      </div>
    );
  }

  render () {
    const videoPlayer = this.renderVideoPlayer();
    const content = this.renderContent(videoPlayer);
    const { width, height } = this.state;

    return !width ? null : content;
  }
};

VideoGallery.defaultProps = { aspectRatio: 0.5 };

export default VideoGallery;
