import React from 'react';
import moment from 'moment';

import './event-list.scss';
import Icon from 'components/icon';

class EventList extends React.Component {
  constructor (props) {
    super(props);
  }

  renderEventRow ({ date, venue, city, tickets, free }) {
    return (
      <row className="event-row">
        <box className="event-date">{moment(date).format('MMM D, Y')}</box>
        <box className="event-setting">
          <box className="event-venue">{venue}</box>
          <box className="event-city">{city}</box>
        </box>
        <box className="event-tickets">
          {free
            ? <button>Free Show</button>
            : !tickets
              ? <button>Coming Soon</button>
              : <a href={tickets} target="_blank">
                  <button>Tickets <Icon fa="chevron-right"/></button>
                </a>
          }
        </box>
      </row>
    );
  }

  render () {
    const { events } = this.props;

    return (
      <stack className="event-list">
        {!events || !events.length
          ? null
          : events.map(this.renderEventRow)
        }
      </stack>
    );
  }
};

export default EventList;
