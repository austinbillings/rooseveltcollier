import React from 'react';

import './VideoPage.scss';
import videos from 'data/videos';
import Icon from 'components/Icon';
import VideoShowcase from 'ui/VideoShowcase';

class VideoPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="video-page">
        <div className="gridx">
          <VideoShowcase videos={videos} max={3}/>
        </div>
      </div>
    );
  }
};

export default VideoPage;
