import React from 'react';
import { Link } from 'react-router-dom';

import Icon from 'Components/Icon';
import SongLink from 'Components/SongLink';
import ShadowBox from 'Components/ShadowBox';
import Store from 'State/Store';
import { selectSong } from 'State/Actions';

class TrackCard extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { track } = this.props;
    const byLine = (
      <span>
        <small>by </small>
        {track.artist}
      </span>
    );

    const downloadLinks = !track.download ? null : track.download.map(({ format, url }) => (
      <a href={url} key={url} target="_blank">
        <button key={url}><Icon fa="arrow-down" /> Download .{format.toUpperCase()}</button>
      </a>
    ));

    return !track ? null : (
      <div className="TrackCard">
        {track.cover && (
          <ShadowBox outerClassName="TrackCard-CoverWrapper" className="TrackCard-CoverContainer">
            <img src={track.cover} onClick={() => Store.dispatch(selectSong(track))} className="TrackCard-Cover" />
          </ShadowBox>
        )}
        <SongLink song={track} />
        {track.artist && !track.artistId && <p><small>by</small>{track.artist}</p>}
        {track.artist && track.artistId && <Link to={'/music/' + track.artistId}><h6><small>by </small>{track.artist}</h6></Link>}
        {track.record && <span className="TrackCard-Album"><small>On</small> {track.record}</span>}
        {track.download && <div className="TrackCard-Downloads">{downloadLinks}</div>}
      </div>
    );
  }
};

export default TrackCard;
