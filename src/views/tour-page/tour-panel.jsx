import React from 'react';

import EventList from 'ui/event-list';
import tourDates from 'data/tour-dates';

class TourPanel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      tourDates: tourDates,
      error: null
    };
  }

  render () {
    const { max, shortDates } = this.props;
    const { tourDates, loading, error } = this.state;

    return (
      <div style={{ width: '100%' }}>
        {loading && <p>Loading. . .</p>}
        {tourDates && <EventList shortDates={shortDates} events={max ? tourDates.slice(0, max) : tourDates}/>}
        {error && <React.Fragment><p>Sorry, there was an error loading the data.</p><pre><code>{JSON.stringify(error)}</code></pre></React.Fragment>}
      </div>
    );
  }
};

export default TourPanel;
