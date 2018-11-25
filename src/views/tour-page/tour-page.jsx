import React from 'react';

import './tour-page.scss';
import tourDates from 'data/tour-dates';
import EventList from 'ui/event-list';
import SectionHeading from 'ui/section-heading';

class TourPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <grid className="tour-page">
        <stack>
          <SectionHeading align="center" text="On Tour"/>
          <EventList events={tourDates}/>
        </stack>
      </grid>
    );
  }
}

export default TourPage;
