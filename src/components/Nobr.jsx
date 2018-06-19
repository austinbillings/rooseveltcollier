import React from 'react';

class Nobr extends React.Component {
  render () {
    const { style, ...props } = this.props;
    return (
      <span style={{ ...style, whiteSpace: 'nowrap' }} {...props}/>
    );
  }
};

export default Nobr;
