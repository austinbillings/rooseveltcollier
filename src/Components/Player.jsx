import React from 'react';
import { Link } from 'react-router-dom';

import AudioPlayer from './audio-player';
import { scrollToTop } from 'utils/utils';

class Player extends React.Component {
  constructor (props) {
    super(props);
    this.state = { song: null, source: null };

    if (this.props.song && this.props.song.url) {
      this.setState({ song: this.props.song, source: this.props.song.url });
    }

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps (newProps) {
    if (newProps.song && newProps.song.url) {
      this.setState({ song: newProps.song, source: newProps.song.url });
    };
  }

  render () {
    let { song } = this.props;
    let artist = !song
      ? (<em className="o5">No Song Selected</em>)
      : song.artistId
        ? (<Link onClick={() => scrollToTop()} to={'/music/' + song.artistId}>{song.artist}</Link>)
        : song.artist;

    return (
      <player className="Player">
        <div className="Player-Meta">
          <span className="Player-Meta-Artist">{artist} </span>
          {false && song && <span> - </span>}
          <span className="Player-Meta-Title">{song ? song.title : ''}</span>
        </div>
        <AudioPlayer className="Player-Audio" src={this.state.source} />
      </player>
    );
  }
}

export default Player;
