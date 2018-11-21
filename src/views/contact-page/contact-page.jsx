import React from 'react';

import './contact-page.scss';
import contacts from 'data/contacts';
import SectionHeading from 'ui/section-heading';

class ContactPage extends React.Component {
  constructor (props) {
    super(props);

    this.renderContactItem = this.renderContactItem.bind(this);
  }

  renderContactItem ({ type, name, email, phone }) {
    return (
      <box key={type} className="xs-12 md-6 row contact-item">
        <box className="contact-type">
          <h1>{type}</h1>
        </box>
        <box className="contact-info">
          <h4>{name}</h4>
          <a href={`mailto:${email}`}>{email}</a>
          <tel>{phone}</tel>
        </box>
      </box>
    );
  }

  render () {
    return (
      <div className="page contact-page">
        <grid className="contact-content items-center">
          <SectionHeading color="#0A6AA3" text="Contact" align="left" />
          <stack className="grow-1">
            {contacts.map(this.renderContactItem)}
          </stack>
        </grid>
      </div>
    );
  }
};

export default ContactPage;
