import React from 'react';
import YouTube from 'react-youtube';

import LoaderBg from 'Components/LoaderBg';

class VideoPlayer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { height, width, video } = this.props;
    const { youtubeId, sources, poster } = video;
    return (
      <div className="VideoPlayer">
        <LoaderBg className="player-container" style={{ minHeight: height }}>
          {sources && (
            <video controls="controls" poster={poster}>
              {sources.mp4 && <source type="video/mp4" src={sources.mp4} />}
              {sources.webm && <source type="video/webm" src={sources.webm} />}
              {sources.ogv && <source type="video/ogg" src={sources.ogv} />}
            </video>
          )}
          {youtubeId && (
            <YouTube
              videoId={video.youtubeId}
              className="player"
              opts={{ height, width }}
            />
          )}
        </LoaderBg>
      </div>
    )
  }
};

export default VideoPlayer;
