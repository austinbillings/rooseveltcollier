import React from 'react';
import moment from 'moment';

import './event-list.scss';
import Icon from 'components/icon';

class EventList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      pastEventsVisible: false
    };

    this.renderEventRow = this.renderEventRow.bind(this);
    this.togglePastEventsVisible = this.togglePastEventsVisible.bind(this);
    this.renderPastEventsToggle = this.renderPastEventsToggle.bind(this);
  }

  togglePastEventsVisible () {
    const { pastEventsVisible } = this.state;

    this.setState({ pastEventsVisible: !pastEventsVisible });
  }

  renderEventRow ({ date, venue, city, tickets, free }, index) {
    const parsedDate = moment(date);
    const hasPassed = parsedDate.isBefore();
    const { hidePastEvents, shortDates } = this.props;
    const { pastEventsVisible } = this.state;
    const className = 'event-row '
      + (!hasPassed
          ? ''
          : ('event-row-passed ' + (
            pastEventsVisible
              ? ''
              : 'event-row-collapsed'
            )
          )
        );

    return hasPassed && hidePastEvents
      ? null
      : (
        <row className={className} key={index}>
          <box className={`event-date ${shortDates ? 'event-date-short' : ''}`}>{parsedDate.format(shortDates ? 'l' : 'MMM D, Y')}</box>
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

  renderPastEventsToggle () {
    const { hidePastEvents } = this.props;
    const { pastEventsVisible } = this.state;

    return hidePastEvents ? null : (
      <div onClick={this.togglePastEventsVisible} className="past-events-toggle">
        {pastEventsVisible ? 'Hide' : 'Show'} Past Events
        <Icon fa={pastEventsVisible ? 'angle-double-up' : 'angle-double-down'}/>
      </div>
    );
  }

  render () {
    const { events, hidePastEvents } = this.props;
    const PastEventsToggle = this.renderPastEventsToggle;
    const pastEventsExist = events.some(event => moment(event.date).isBefore());

    return (
      <stack className="event-list">
        {hidePastEvents || !pastEventsExist ? null : <PastEventsToggle/>}
        {!events || !events.length
          ? null
          : events.map(this.renderEventRow)
        }
      </stack>
    );
  }
};

export default EventList;
