import React from 'react';
import { Link } from 'react-router-dom';

import Urls from 'Meta/Urls';
import Overlay from 'Components/Overlay';

class ArtistListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { artist } = this.props;
    const banner = artist.photos && artist.photos.banner ? artist.photos.banner : null;

    return (
      <Link to={Urls.music.artist.replace(':artist', artist.id)}>
        <Overlay
          image={banner}
          position={artist.bannerFocus ? artist.bannerFocus : 'center center'}
          className="ArtistListItem-Wrapper"
          innerClass="ArtistListItem"
        >
          <h3>
            {artist.name}
          </h3>
        </Overlay>
      </Link>
    );
  }
};

export default ArtistListItem;
