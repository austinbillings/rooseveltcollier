import React, { Fragment } from 'react';
import axios from 'axios';

import EventList from 'ui/event-list';
import { SERVER_URL } from 'data/config';

class TourPanel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      loading: true,
      tourDates: null,
      error: null
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
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
        {error && <p>Sorry, there was an error loading the data. <pre><code>{JSON.stringify(error)}</code></pre></p>}
      </div>
    );
  }
};

export default TourPanel;
