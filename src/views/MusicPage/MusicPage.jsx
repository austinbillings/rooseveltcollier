import React from 'react';

import './MusicPage.scss';
import music from 'data/music';

import SectionHeading from 'ui/SectionHeading';
import AlbumRow from 'ui/AlbumRow';

class MusicPage extends React.Component {
  constructor (props) {
    super(props);
  }

  renderMusicCard (release) {
    return (
      <div>{release.title}</div>
    )
  }

  render () {
    return (
      <div className="page music-page">
        <grid>
          <SectionHeading color="white" text="Music" align="right" />
          <row>
            {music.map((release, index) =>
              <AlbumRow key={index} {...release}/>
            )}
          </row>
        </grid>
      </div>
    );
  }
};

export default MusicPage;
