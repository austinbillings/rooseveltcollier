import React from 'react';

import './validator.scss';
import Icon from 'components/icon';
import { isValid } from 'utils/validation';

class Validator extends React.Component {
  constructor (props) {
    super(props);
    this.state = { closed: false };
    this.close = this.close.bind(this);
    this.reopen = this.reopen.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.renderCloser = this.renderCloser.bind(this);
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
  }

  componentWillReceiveProps (newProps) {
    this.reopen();
  }

  close () {
    const closed = true;
    this.setState({ closed });
  }

  reopen () {
    const closed = false;
    this.setState({ closed });
  }

  getMessage () {
    const { type, message } = this.props;
    if (message || !type) return message;

    switch (type.toLowerCase()) {
      case 'email':
        return 'Please enter a valid email address.';
      case 'pass':
      case 'password':
        return (
          <span>
            Please enter a valid password.
            <br />
            <small>
              10+ letters, numbers, and/or special characters.
              <br />
              Acceptable characters:
              <code>!@#~%^&?-_</code>
            </small>
          </span>
        );
      case 'name':
        return (
          <span>
            Please provide a valid name.
            <br />
            <small>(Letters, spaces, hyphens, and periods only)</small>
          </span>
        );
      case 'slug':
        return (
          <span>
            Please provide a valid URL slug.<br />
            <small>(Letters, numbers, hyphens, and underscores only)</small>
          </span>
        );
      case 'number':
        return 'Please enter a valid number.';
      default:
        return 'Please enter a valid value.';
    }
  }

  renderCloser () {
    const { closeable } = this.props;
    return !closeable ? null : (
      <small className="Validator-Closer" onClick={this.close}>
        <Icon fa="times-circle" />
      </small>
    );
  }

  render () {
    const { check, type, enabled, visible, closeable } = this.props;
    const { closed } = this.state;

    const Closer = this.renderCloser;
    const message = this.getMessage();
    const invalid = !type || !isValid(check, type);
    const populated = check && check.length;

    const showValidator = (visible || (invalid && enabled)) && !closed;

    return (
      <div className={'Validator ' + (showValidator ? 'active' : 'inactive')}>
        <span className="Validator-Message">{message}</span>
        <Closer />
      </div>
    );
  }
};

export default Validator;
