import React from 'react';
import moment from 'moment';

import './album-row.scss';
import Overlay from 'components/overlay';
import TabPanel from 'components/tab-panel';

class AlbumRow extends React.Component {
  constructor (props) {
    super(props);

    this.renderInfo = this.renderInfo.bind(this);
    this.renderCover = this.renderCover.bind(this);

    this.renderTrack = this.renderTrack.bind(this);
    this.renderTracks = this.renderTracks.bind(this);

    this.renderCredit = this.renderCredit.bind(this);
    this.renderCredits = this.renderCredits.bind(this);

    this.renderLinks = this.renderLinks.bind(this);
    this.renderLinkButton = this.renderLinkButton.bind(this);
  }

  renderCover () {
    const { image } = this.props;

    return !image
      ? null
      : (
        <Overlay className="album-cover-container"
          innerClass="album-cover-wrapper"
          image={image}
          overlay="rgba(19, 22, 22, 0.95)">
            <img src={image} className="album-cover"/>
        </Overlay>
      );
  }

  renderInfo ({ title, subtitle, releaseDate, content }) {
    const release = releaseDate ? moment(releaseDate) : null;

    return (
      <div className="album-info">
        {!title ? null : (
          <h1>{title}</h1>
        )}
        {!subtitle ? null : (
          <h2>{subtitle}</h2>
        )}
        {!releaseDate ? null : (
          <h3>
            {release.isBefore() ? 'Released ' : 'Coming '}
            {release.format('MMMM D, Y')}
          </h3>
        )}
        {!content ? null : (
          <div className="album-content" children={content} />
        )}
      </div>
    );
  }

  // ==========================================================================

  renderLinkButton ({ url, text }, index) {
    return !url || !text ? null : (
      <a href={url} key={index} target="_blank" className="album-link">
        <button className="album-link-button btn-blue">
          {text}
        </button>
      </a>
    );
  }

  renderLinks ({ list }) {
    return !list
      ? null
      : <div className="album-links" children={list.map(this.renderLinkButton)} />
  }

  // ==========================================================================

  renderTrack (track, index) {
    return (
      <div className="album-track" key={index}>
        <span className="album-track-number">{index + 1}.</span>
        <div className="album-track-info">
          {!track.title ? null : <span className="album-track-title">{track.title}</span>}
          {!track.length ? null : <span className="album-track-length"> {track.length}</span>}
        </div>
      </div>
    );
  }

  renderTracks ({ list }) {
    return !list || !list.length
      ? null
      : <div className="album-tracklist" children={list.map(this.renderTrack)} />
  }

  // ==========================================================================

  renderCredit (credit, index) {
    return (
      <div className="album-credit" key={index}>
        {!credit.name ? null : <span className="album-credit-name">{credit.name}</span>}
        {!credit.part ? null : <span className="album-credit-part">{credit.part}</span>}
      </div>
    );
  }

  renderCredits ({ list }) {
    return !list || !list.length
      ? null
      : <div className="album-credits" children={list.map(this.renderCredit)} />
  }

  // ==========================================================================

  render () {
    const { id, tracks, links, credits, isFeatured } = this.props;

    const Info = this.renderInfo;
    const Cover = this.renderCover;
    const Links = this.renderLinks;
    const Tracks = this.renderTracks;
    const Credits = this.renderCredits;
    const className = 'album-row ' + (isFeatured ? 'featured' : 'not-featured');

    const tabs = [
      { name: 'Tracklist', content: <Tracks list={tracks}/> },
      { name: 'Credits', content: <Credits list={credits}/> }
    ];

    return (
      <div className={className}>
        <a name={id}/>
        <Cover {...this.props} />
        <div className="album-details">
          <Info {...this.props} />
          <Links list={links}/>
        </div>
        <TabPanel tabs={tabs} className="album-sidebar" />
      </div>
    );
  }
};

export default AlbumRow;
