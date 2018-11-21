import React from 'react';

import './music-page.scss';
import music from 'data/music';

import SectionHeading from 'ui/section-heading';
import AlbumRow from 'ui/album-row';

class MusicPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="page music-page">
        <grid>
          <SectionHeading color="white" text="Music" align="right" />
          <row>
            {music.map((release, index) => <AlbumRow key={index} {...release}/>)}
          </row>
        </grid>
      </div>
    );
  }
};

export default MusicPage;
