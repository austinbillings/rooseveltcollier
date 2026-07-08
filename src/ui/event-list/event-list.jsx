import React from 'react';

import './event-list.css';
import Icon from 'components/icon';

const longFormatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const shortFormatter = new Intl.DateTimeFormat('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' });

const parseDate = (raw) => {
  const d = raw instanceof Date ? raw : new Date(raw);
  return isNaN(d.getTime()) ? null : d;
};

const formatDate = (raw, { short } = {}) => {
  const d = parseDate(raw);
  if (!d) return '';
  return (short ? shortFormatter : longFormatter).format(d);
};

const isBeforeNow = (raw) => {
  const d = parseDate(raw);
  return d ? d.getTime() < Date.now() : false;
};

class EventList extends React.Component {
  constructor (props) {
    super(props);

    this.state = { pastEventsVisible: false };

    this.renderEventRow = this.renderEventRow.bind(this);
    this.togglePastEventsVisible = this.togglePastEventsVisible.bind(this);
    this.renderPastEventsToggle = this.renderPastEventsToggle.bind(this);
  }

  togglePastEventsVisible () {
    this.setState({ pastEventsVisible: !this.state.pastEventsVisible });
  }

  renderEventRow ({ date, venue, city, tickets, free }, index) {
    const hasPassed = isBeforeNow(date);
    const { hidePastEvents, shortDates } = this.props;
    const { pastEventsVisible } = this.state;
    const className = 'event-row '
      + (!hasPassed
          ? ''
          : ('XXevent-row-passed ' + (pastEventsVisible ? '' : 'event-row-collapsed')));

    return hasPassed && hidePastEvents ? null : (
      <row className={className} key={index}>
        <box className={`event-date ${shortDates ? 'event-date-short' : ''}`}>
          {formatDate(date, { short: shortDates })}
        </box>
        <box className="event-setting">
          <box className="event-venue">{venue}</box>
          <box className="event-city">{city}</box>
        </box>
        <box className="event-tickets">
          {free
            ? <button>Free Show</button>
            : !tickets
              ? <button>Coming Soon</button>
              : <a href={tickets} target="_blank" rel="noreferrer">
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
    const pastEventsExist = events.some(event => isBeforeNow(event.date));

    return (
      <stack className="event-list">
        {hidePastEvents || !pastEventsExist ? null : <PastEventsToggle/>}
        {!events || !events.length ? null : events.map(this.renderEventRow)}
      </stack>
    );
  }
};

export default EventList;
