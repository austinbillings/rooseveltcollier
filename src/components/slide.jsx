import React from 'react';

class Slide extends React.Component {
  constructor (props) {
    super(props);

    let { heightFactor } = this.props;

    this.style = {
      width: '100vw',
      minHeight: (100 * (heightFactor || 1)) + 'vh'
    };
  }

  render () {
    let { children } = this.props;
    return (
      <div {...this.props} style={this.style}>
        {children}
      </div>
    );
  }
};

export default Slide;
