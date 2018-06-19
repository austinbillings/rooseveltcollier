import React from 'react';

import './TextBox.scss';
import Icon from 'components/Icon';
import Submit from 'components/Submit';

class TextBox extends React.Component {
  constructor (props) {
    super(props);

    this.state = { focused: false, touched: false };
    this.handleChange = this.handleChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  handleChange (evt) {
    const { onChange } = this.props;
    if (typeof onChange !== 'function')
      throw new TypeError('TextBox didnt receive onChange');

    onChange(evt.target.value);
  }

  onFocus () {
    this.setState({ focused: true, touched: true });
  }

  onBlur () {
    this.setState({ focused: false });
  }

  render () {
    const { focused, touched } = this.state;
    const { value, label, icon, isSubmittable, onSubmit, isValid: checkValidity } = this.props;
    const isValid = typeof checkValidity === 'function' ? checkValidity(value) : true;
    const isErrant = touched && !isValid && value && value.length;
    const className = 'text-box-wrapper '
      + (focused ? 'text-box-wrapper--focused ' : '')
      + (touched && value && value.length
        ? (isValid
          ? 'text-box-wrapper--valid'
          : 'text-box-wrapper--invalid')
        : ''
      );

    return (
      <div className={className} title={isErrant ? 'Please enter a valid value.' : ''}>
        {!icon ? null : (
          <Icon fa={icon} className="text-box-icon"/>
        )}
        <input
          type="text"
          className="text-box"
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={this.handleChange}
          value={value ? value : ''}
          placeholder={label ? label : 'Please Enter a Value'}
        />
      {!onSubmit ? null : (
        <Submit when={isSubmittable && touched && !isErrant}>
          <Icon fa="chevron-circle-right"/>
        </Submit>
      )}
      </div>
    )
  }
};

export default TextBox;
