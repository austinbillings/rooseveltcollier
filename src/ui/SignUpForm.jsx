import React from 'react';

import Icon from 'Components/Icon';

class SignUpForm extends React.Component {
  constructor (props) {
    super(props);
  }

  handleSubmit (e) {
    return e.preventDefault();
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
