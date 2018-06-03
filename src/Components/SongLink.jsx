import React from 'react';

import Icon from './Icon';
import Store from 'State/Store';
import { selectSong } from 'State/Actions';

class SongLink extends React.Component {
  constructor (props) {
    super(props);
    this.state = { isPlaying: false, playingClass: '', iconClass: 'play-circle' };

    this.updatePlayingStatus();
    this.unsubscribe = Store.subscribe(() => this.updatePlayingStatus());

    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.updatePlayingStatus = this.updatePlayingStatus.bind(this);
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  componentDidMount () {
    this.updatePlayingStatus();
  }

  updatePlayingStatus () {
    if (!this.refs.main) return;
    let currentSong = Store.getState().active.song;
    if (currentSong && currentSong.id === this.props.song.id) {
      this.setState({ isPlaying: true, playingClass: 'playing', iconClass: 'volume-up' });
    } else if (this.state.isPlaying) {
      this.setState({ isPlaying: false, playingClass: '', iconClass: 'play-circle' });
    }
  }

  handleClick (e) {
    let { song } = this.props;
    Store.dispatch(selectSong(song));
  }

  render () {
    let { song } = this.props;
    let classes = ['SongLink', this.state.playingClass, this.props.className].filter(x => x).join(' ');
    return (
      <span className={classes} onClick={this.handleClick} ref="main">
        <Icon fa={this.state.iconClass} />
        {song.title}
      </span>
    );
  }
}

export default SongLink;
