import React from 'react';

export default class Submit extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { className, when, children, onClick } = this.props;
    return when ? (
      <button type="submit" onClick={onClick} className={className}>{children}</button>
    ) : (
      <button type="submit" onClick={onClick} className={className} disabled>{children}</button>
    );
  }
}
