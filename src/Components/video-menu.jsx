import React from 'react';

import Icon from 'components/icon';

class VideoMenu extends React.Component {
  constructor (props) {
    super(props);
    this.makeMenuItem = this.makeMenuItem.bind(this);
  }

  makeMenuItem (video, index) {
    const { activeIndex, onChoose } = this.props;
    const isActive = index === activeIndex;
    const className = 'menu-item' + (isActive ? ' menu-item--active' : '');

    return (
      <div className={className} key={index} onClick={() => onChoose(video, index)}>
        <div className="player-meta">
          {video.title && <h3>{video.title}</h3>}
          {video.subtitle && <span className="meta-subtitle">{video.subtitle}</span>}
          {video.album && <div><small>From the album </small><h4>{video.album}</h4></div>}
          {isActive && <h5 className="watching-flag"><Icon fa="play" /> Watching</h5>}
        </div>
      </div>
    );
  }

  render () {
    const { videos, activeIndex, onChoose } = this.props;
    const list = videos.map(this.makeMenuItem);

    return <div className="video-menu">{list}</div>
  }
};

export default VideoMenu;
