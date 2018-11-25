import React from 'react';

import './video-page.scss';
import videos from 'data/videos';
import Icon from 'components/icon';
import VideoShowcase from 'ui/video-showcase';
import { getCurrentQueryStringValue } from 'utils/utils';

class VideoPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      targetVideo: null
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    const video = getCurrentQueryStringValue('vid');

    this.setState({ targetVideo: video });
  }

  render () {
    const { targetVideo } = this.state;

    return (
      <div className="video-page">
          <VideoShowcase videos={videos} max={3} targetVideo={targetVideo} />
      </div>
    );
  }
};

export default VideoPage;
