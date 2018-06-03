import React from 'react';

import ShadowBox from 'Components/ShadowBox';

class VideoMenu extends React.Component {
  constructor (props) {
    super(props);
    this.makeMenuItem = this.makeMenuItem.bind(this);
  }

  makeMenuItem (video, index) {
    const { activeIndex, onChoose } = this.props;
    const isActive = index === activeIndex;
    const className = 'MenuItem' + (isActive ? ' active' : '');

    return (
      <div className={className} key={index}>
        <ShadowBox>
          <div onClick={() => onChoose(video, index)}>
            {video.title && <h2>{video.title}</h2>}
            {video.artist && <h3>{video.artist}</h3>}
            {video.album && <div><small>From the album </small><h4>{video.album}</h4></div>}
            {isActive && <h5 className="red w200 drag3 ls3"><Icon fa="play" /> Watching</h5>}
          </div>
        </ShadowBox>
      </div>
    );
  }

  render () {
    const { videos, activeIndex, onChoose } = this.props;
    const list = videos.map(this.makeMenuItem);

    return <div className="VideoMenu">{list}</div>
  }
};

export default VideoMenu;
