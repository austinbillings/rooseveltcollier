import React from 'react';

import './ContactPage.scss';
import contacts from 'data/contacts';
import SectionHeading from 'ui/SectionHeading';

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
                <row className="grow-0">
                  <SectionHeading color="#0A6AA3" text="Contact" align="center" />
                </row>
                <row className="grow-1">
                  {contacts.map(this.renderContactItem)}
                </row>
              </grid>
            </div>
        );
    }
};

export default ContactPage;
