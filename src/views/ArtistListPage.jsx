import React from 'react';
import { Link } from 'react-router-dom';

import ShadowBox from 'Components/ShadowBox';
import Artists from 'Content/Artists';
import ArtistListItem from 'Ui/ArtistListItem';
import SectionHeading from 'Ui/SectionHeading';

class ArtistListView extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const artists = Artists.list;
    const list = artists.map((artist, idx) => {
      const outerClass = (false && artists.length % 2 !== 0 && idx + 1 === artists.length) ? 'hanging' : '';
      return (
        <ShadowBox outerClassName={outerClass} key={artist.id}>
          <ArtistListItem artist={artist} />
        </ShadowBox>
      );
    });

    return (
      <grid className="ArtistListPage justify-center">
        <SectionHeading text="Music" icon="music" />
        {list}
      </grid>
    );
  }
};

export default ArtistListView;
