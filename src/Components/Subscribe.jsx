import React from 'react';
import Axios from 'axios';

import Icon from 'components/Icon';
import Submit from 'components/Submit';

const text = {
  ui: {
    subscribeSuccess: 'You\'re on our list! Thanks!',
    badEmail: 'Please provide a valid email address'
  }
};

const endpoint = 'http://165.227.106.33:19363/api/subscribe';

class Subscribe extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      email: null,
      success: null,
      error: null,

      touched: false,
      submitted: false,
      invalid: false,
      loading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
    this.isSubmittable = this.isSubmittable.bind(this);
  }

  validateEmail () {
    let { touched, email } = this.state;

    if (!touched) {
      return false;
    } else if (!email || !email.length) {
      this.setState({ invalid: true, error: null });
      return false;
    } else if (!email.match(/^[^\s@]+@[^\s!?&%*$#@]+\.[a-zA-Z\.]+$/)) {
      this.setState({ invalid: true, error: text.ui.badEmail });
      return false;
    } else {
      this.setState({ invalid: false, error: null });
      return true;
    }
  }

  handleChange (e) {
    if (!this.state.touched) this.setState({ touched: true });
    let email = e.currentTarget.value;
    this.setState({ email });
    this.validateEmail();
  }

  isSubmittable () {
    let { touched, email, submitted, invalid } = this.state;
    return touched && email.length > 5 && !submitted && !invalid;
  }

  handleSubmit (e) {
    e.preventDefault();
    if (!this.isSubmittable()) return false;

    let { email } = this.state;
    this.setState({ loading: true });

    Axios.post(endpoint, { email })
      .then(res => {
        this.setState({ loading: false, error: null, success: text.ui.subscribeSuccess });
      })
      .catch(err => {
        this.setState({ loading: false, error: 'An unknown error occurred.', success: null });
      });

    return false;
  }

  render () {
    let { children } = this.props;
    let { success, error } = this.state;

    return (
      <div className="Subscribe">
        <form className="Subscribe-form" onSubmit={this.handleSubmit} action="#">
          {children}

          <input className="Subscribe-input" type="text" onChange={this.handleChange} placeholder="Email Address" />
          <Submit when={this.isSubmittable()} className="Subscribe-submi">
            <Icon fa="chevron-right" />
          </Submit>

          {success && <span className="bloc p10 success-text blue">{success} <Icon fa="check-circle success-icon ml5" /></span>}
          {error && <span className="bloc p10 error-text red">{error} <Icon fa="warning error-icon ml5" /></span>}

        </form>
      </div>
    );
  }
};

export default Subscribe;
