import React from 'react';

class LoaderBg extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { children } = this.props;
    return <div className="LoaderBg" {...this.props}>{children}</div>
  }
};

export default LoaderBg;
