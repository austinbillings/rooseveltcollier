import React from 'react';

class ProgressBar extends React.Component {
  constructor (props) {
    super(props);
    this.outerStyle = this.outerStyle.bind(this);
    this.innerStyle = this.innerStyle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getPercentAtClick = this.getPercentAtClick.bind(this);
  }

  outerStyle () {
    const { radius, background, height } = this.props;
    return {
      display: 'block',
      width: '100%',
      overflow: 'hidden',
      borderRadius: radius + 'px',
      backgroundColor: background,
      height: height + 'px'
    }
  }

  innerStyle (percent) {
    const { color } = this.props;
    return {
      display: 'block',
      width: percent + '%',
      backgroundColor: color,
      height: '100%',
      transition: 'all 0.2s ease',
      WebkitTransition: 'all 0.2s ease'
    }
  }

  getPercentAtClick (e) {
    let { offsetX, target } = e.nativeEvent
    let width = target.clientWidth;
    let percent = offsetX / width * 100;
    return percent;
  }

  handleClick (e) {
    const percent = this.getPercentAtClick(e);
    const newEvent = Object.assign({}, e, { scrubPosition: percent / 100 });
    if (this.props.interactive && this.props.onScrub) this.props.onScrub(newEvent);
  }

  render () {
    const { percent, className } = this.props;
    const { handleClick, innerStyle, outerStyle } = this;
    return (
      <div className={className ? className : ''}>
        <div className="progress-bar" onClick={handleClick} style={outerStyle()}>
          <div className="progress-bar-inner" style={innerStyle(percent)}> </div>
        </div>
      </div>
    );
  }
}

ProgressBar.defaultProps = {
  height: 10,
  color: '#aaa',
  radius: 5,
  background: 'rgba(0,0,0,0.3)',
  className: 'progress-bar-outer'
}

export default ProgressBar;
