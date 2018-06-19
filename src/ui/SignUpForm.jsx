import React from 'react';
import axios from 'axios';

import Icon from 'components/Icon';

class SignUpForm extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit (e) {
    e.preventDefault();
  }

  render () {
    return (
      <form className="SignUpForm">
        <fieldset className="paired">
          <input placeholder="Your Email" />
          <button onClick={this.handleSubmit}><Icon fa="chevron-right" /></button>
        </fieldset>
      </form>
    )
  }
};

export default SignUpForm;
