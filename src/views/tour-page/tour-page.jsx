import React from 'react';

import tourDates from 'data/tour-dates';
import EventList from 'ui/event-list';
import SectionHeading from 'ui/section-heading';

class TourPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <grid>
        <stack>
          <SectionHeading align="center" text="On Tour"/>
          <EventList events={tourDates}/>
        </stack>
      </grid>
    );
  }
}

export default TourPage;
