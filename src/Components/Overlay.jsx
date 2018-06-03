import React from 'react';

class Overlay extends React.Component {
  constructor (props) {
    super(props);
    this.getWrapStyle = this.getWrapStyle.bind(this);
    this.getInnerStyle = this.getInnerStyle.bind(this);
  }

  getWrapStyle () {
    const { image, position, size } = this.props;
    return {
      backgroundImage: `url(${image})`,
      backgroundPosition: position || 'center center',
      backgroundSize: size || 'cover'
    };
  }

  getInnerStyle () {
    const { overlay: backgroundColor } = this.props;
    return backgroundColor ? { backgroundColor } : {};
  }

  render () {
    const wrapStyle = this.getWrapStyle();
    const innerStyle = this.getInnerStyle();

    const { onClick, className: givenClassName, id, innerClass, children } = this.props;
    const className = 'Overlay' + (givenClassName ? ' ' + givenClassName : '');

    return (
      <div onClick={onClick} className={className} id={id} style={wrapStyle}>
        <div style={innerStyle} className={innerClass} children={children} />
      </div>
    );
  }
};

export default Overlay;
