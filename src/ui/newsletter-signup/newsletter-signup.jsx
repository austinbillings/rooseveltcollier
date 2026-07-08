import React from 'react';

import './newsletter-signup.css';
import TextBox from 'components/text-box';
import { isValidEmail } from 'utils/validation';

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

  async submitEmail () {
    const { email } = this.state;
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json().catch(() => null);
      this.setState({ submitted: true, message: data });
    } catch (err) {
      this.setState({ submitted: true, message: err.message });
    }
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
      onSubmit: () => this.submitEmail(),
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
