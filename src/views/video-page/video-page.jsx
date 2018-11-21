import React from 'react';

import './VideoPage.scss';
import videos from 'data/videos';
import Icon from 'components/icon';
import VideoShowcase from 'ui/VideoShowcase';
import { getCurrentQueryStringValue } from 'utils/utils';

class VideoPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      requestedVideo: null
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    const video = getCurrentQueryStringValue('video');

    this.setState({ requestedVideo: video });
  }

  render () {
    const { requestedVideo } = this.state;
    console.info('rv: ', requestedVideo);

    return (
      <div className="video-page">
          <VideoShowcase videos={videos} max={3} requestedVideo={requestedVideo} />
      </div>
    );
  }
};

export default VideoPage;
