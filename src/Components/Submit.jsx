import React from 'react';

export default class Submit extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { className, when, children } = this.props;
    return when ? (
      <button type="submit" className={className}>{children}</button>
    ) : (
      <button type="submit" className={className} disabled>{children}</button>
    );
  }
}
