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
          <div style={{ margin: '0px auto 20px' }}>
            <img src="/assets/2022/europe-summer.jpg" style={{ maxWidth: '90vw', width: 400, border: '2px solid white', borderRadius: 15 }} />
          </div>
          <BandsintownWidget limit="all" />
        </stack>
      </grid>
    );
  }
}

export default TourPage;
