import React from 'react';
import axios from 'axios';

import './newsletter-signup.scss';
import TextBox from 'components/TextBox';
import { isValidEmail } from 'utils/Validation';

class NewsletterSignup extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: null,
      submitted: false,
      message: false
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
    this.emailIsValid = this.emailIsValid.bind(this);
  }

  submitEmail () {
    if (!this.emailIsValid()) return;
    const { email } = this.state;

    alert('submitting ' + email);
    return;
    // axios.post('#', { email })
    //   .then(res => this.setState({ submitted: true }))
    //   .then(err => this.setState({ submitted: true, message: err.data }));
  }

  emailIsValid () {
    const { email } = this.state;
    return isValidEmail(email);
  }

  onEmailChange (email) {
    this.setState({ email });
  }

  render () {
    const { email, submitted } = this.state;
    const props = {
      value: email,
      icon: 'envelope-o',
      label: 'Enter your email address',
      onChange: this.onEmailChange,
      isSubmittable: this.emailIsValid(),
      onSubmit: this.submitEmail,
      isValid: isValidEmail
    };

    return (
      <div className="newsletter-signup">
        <TextBox {...props}/>
      </div>
    )
  }
};

export default NewsletterSignup;
