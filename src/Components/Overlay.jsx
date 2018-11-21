import React from 'react';

class Overlay extends React.Component {
  constructor (props) {
    super(props);

    this.getWrapperStyle = this.getWrapperStyle.bind(this);
    this.getInnerStyle = this.getInnerStyle.bind(this);
  }

  getWrapperStyle () {
    const { image, position, size, style } = this.props;

    return {
      backgroundImage: `url(${image})`,
      backgroundPosition: position || 'center center',
      backgroundSize: size || 'cover',
      ...style
    };
  }

  getInnerStyle () {
    const { overlay: backgroundColor } = this.props;
    const baseStyle = {
      height: '100%',
      width: '100%'
    };

    return backgroundColor
      ? { backgroundColor, ...baseStyle }
      : baseStyle;
  }

  render () {
    const wrapStyle = this.getWrapperStyle();
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
