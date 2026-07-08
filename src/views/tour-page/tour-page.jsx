import React from 'react';

import './tour-page.css';
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
          <div className="tour-hero">
            <img
              src="/assets/2026/optimized/roosevelt-warm-stage.jpg"
              alt="Roosevelt Collier on stage"
              className="tour-hero-image"
            />
          </div>
          <SectionHeading align="center" text="On Tour"/>
          <BandsintownWidget limit="all" />
        </stack>
      </grid>
    );
  }
}

export default TourPage;
