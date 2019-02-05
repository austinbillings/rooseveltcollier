import React from 'react';
import axios from 'axios';

import './tour-page.scss';
import EventList from 'ui/event-list';
import SectionHeading from 'ui/section-heading';
import { SERVER_URL } from 'data/config';

class TourPage extends React.Component {
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
    const { tourDates, loading, error } = this.state;
    return (
      <grid className="tour-page">
        <stack>
          <SectionHeading align="center" text="On Tour"/>
          {loading && <p>Loading. . .</p>}
          {tourDates && <EventList events={tourDates}/>}
          {error && <p>Sorry, there was an error loading the data. <pre><code>{JSON.stringify(error)}</code></pre></p>}
        </stack>
      </grid>
    );
  }
}

export default TourPage;
