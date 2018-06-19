import React from 'react';

import TrackCard from 'ui/TrackCard';

class TrackPanel extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { children, tracks } = this.props;
    return (
      <div className="TrackPanel-Wrapper full">
        {children}
        <row className="TrackPanel">
          {tracks.map(track => (
            <box className="xs-12 md-6 lg-3" key={track.url}>
              <TrackCard track={track} />
            </box>
          ))}
        </row>
      </div>
    );
  }
};

export default TrackPanel;
