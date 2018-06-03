import React from 'react';
import { Link } from 'react-router-dom';

import Urls from 'Meta/Urls';
import Artists from 'Content/Artists';
import Icon from 'Components/Icon';
import NotFound from 'Ui/NotFound';
import CardOverlay from 'Components/CardOverlay';
import SocialNav from 'Ui/SocialNav';
import ShadowBox from 'Components/ShadowBox';
import MemberListing from 'Ui/MemberListing';
import Overlay from 'Components/Overlay';
import TrackCard from 'Ui/TrackCard';
import Features from 'Content/Features';
import FeatureListItem from 'Ui/FeatureListItem';

class ArtistDetailPage extends React.Component {
  constructor (props) {
    super(props);
  }

  renderEmptyState () {
    const id = this.props.match.params.artist;
    return (
      <NotFound name="Artist" id={id}>
        <p>
          <b>Sorry.</b> We couldn't find any artist at  <code>/{id}</code>.
        </p>
        <p>
          <Link to={Urls.music.index}>
            <Icon fa="angle-double-left mr10" />
            See all artists
          </Link>
        </p>
      </NotFound>
    );
  }

  renderArtistHeader (artist) {
    let { name, photos, bannerFocus, banner } = artist;
    return (
      <Overlay
        className="Artist-Header"
        position={bannerFocus}
        image={photos.banner}
        innerClass="Artist-Header-Inner"
      >
        <CardOverlay>
          <row>
            <box className="xs-12 sm-8 sm-offset-4">
              <h1 className="Artist-Name">{name}</h1>
              <Link to={Urls.music.index}>
                <Icon fa="angle-double-left mr10" />Back to All Artists
              </Link>
            </box>
          </row>
        </CardOverlay>
      </Overlay>
    );
  }

  renderArtistProfile (artist) {
    const featureList = Features
      .filter(feature => !feature.hidden && feature.artistId === artist.id)
      .map(feature => (
        <FeatureListItem
          key={feature.id}
          feature={feature}
        />
      ));

    return (
      <row className="Artist-Profile">
        <box className="xs-12 sm-4 left-column">
          <img src={artist.photos.profile} className="Artist-Photo" />
          {artist.city && <h4 className="Artist-City"><Icon fa="globe" /> {artist.city}</h4>}
          {artist.links && <SocialNav socials={artist.links} name={artist.name} />}
          {artist.tracks && <stack>{artist.tracks.map(track => <TrackCard track={track} key={track.id} />)}</stack>}
          {artist.members && artist.memberStyle !== 'across' && <MemberListing members={artist.members} />}
        </box>
        <box className="xs-12 sm-8 right-column">
          <div className="Artist-Tagline">{artist.tagline}</div>
          <div className="Artist-Bio">{artist.bio}</div>
          <div className="Artist-Features">{featureList}</div>
        </box>
        {artist.members && artist.memberStyle === 'across' && (
          <box className="xs-12 member-row">
            <MemberListing members={artist.members} className="wide" />
          </box>
        )}
      </row>
    );
  }

  render () {
    const id = this.props.match.params.artist;
    const artist = Artists.find(id);

    return !artist ? this.renderEmptyState() : (
      <grid className="ArtistDetailPage">
        <ShadowBox>
          {this.renderArtistHeader(artist)}
          {this.renderArtistProfile(artist)}
        </ShadowBox>
      </grid>
    );
  }
};

export default ArtistDetailPage;
