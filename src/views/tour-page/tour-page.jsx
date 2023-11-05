import React from 'react';

import './tour-page.scss';
import TourPanel from './tour-panel.jsx';
import BandsintownWidget from 'ui/bandsintown-widget';
import SectionHeading from 'ui/section-heading';

class TourPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <grid className="tour-page">
        <stack style={{ width: '100%', flexGrow: 1 }}>
          <SectionHeading align="center" text="On Tour"/>
          <div className="poster-list">
            {[
              '/assets/tours/jimimeetsfunk-23.jpg',
              '/assets/tours/rcb-23.png',
              '/assets/tours/rcb-ek-23-florida.png',
            ].map(imageUrl => (
              <img key={imageUrl} src={imageUrl} />
            ))}
          </div>
          <BandsintownWidget limit="all" />
        </stack>
      </grid>
    );
  }
}

export default TourPage;
