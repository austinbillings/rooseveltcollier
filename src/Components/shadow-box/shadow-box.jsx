import React from 'react';

class ShadowBox extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { children, className, outerClassName } = this.props;
    className = className ? className : '';
    outerClassName = outerClassName ? outerClassName : '';

    return (
      <div className={'ShadowBox-Outer ' + outerClassName}>
        <div className={'ShadowBox ' + className}>
          {children}
        </div>
      </div>
    )
  }
}

export default ShadowBox;
