import React, { Fragment } from 'react';
import axios from 'axios';

import EventList from 'ui/event-list';
import { SERVER_URL } from 'data/config';

import tourDates from 'data/tour-dates'

class TourPanel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: false,
      tourDates: tourDates,
      error: null
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    return;
    axios.get(SERVER_URL + '/api/tour')
      .then(({ data }) => {
        this.setState({ tourDates: data, loading: false });
      })
      .catch(err => {
        this.setState({ loading: false, error: true });
      });
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
