import React from 'react';

import './tour-page.scss';
import TourPanel from './tour-panel.jsx';
import SectionHeading from 'ui/section-heading';

class TourPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <grid className="tour-page">
        <stack>
          <img src="/assets/tours/fall-2021.jpg" style={{ margin: '30px auto', maxWidth: '90%', width: 500 }} />
          <SectionHeading align="center" text="On Tour"/>
          <TourPanel/>
        </stack>
      </grid>
    );
  }
}

export default TourPage;
