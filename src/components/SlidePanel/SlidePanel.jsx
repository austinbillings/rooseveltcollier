import React from 'react';

import './SlidePanel.scss';
import Icon from 'components/Icon';
import { keylightGradient } from 'utils/Css';

class SlidePanel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeSlide: 0
    };

    this.renderSlide = this.renderSlide.bind(this);
  }

  moveToSlide (activeSlide) {
    this.setState({ activeSlide })
  }

  renderSlide (slide, key) {
    const { activeSlide } = this.state;
    const { children } = this.props;
    const isActive = activeSlide === key;
    const { accent, background, slideClass } = slide;
    const onClick = () => isActive ? null : this.moveToSlide(key);
    const className = 'slide '
      + (isActive ? 'slide--active ' : 'slide--inactive ')
      + (slideClass ? slideClass : '');

    const coverStyle = isActive
      ? { background: keylightGradient(accent) }
      : { backgroundColor: accent };

    const Cover = () => !accent ? null : <div className="slide-cover" style={coverStyle}></div>;
    const Children = () => !children ? null : <div className="slide-embedded-children" children={children}/>;

    const style = {};
    if (background && background.image)
      style.backgroundImage = `url('${background.image}')`;
    if (background && background.position)
      style.backgroundPosition = background.position;

    const props = { key, style, className, onClick };

    return (
      <div {...props}>
        <Cover/>
        <Children/>
        <div className="slide-content">
          {slide.content}
        </div>
        <h3 className="slide-inactive-title">
          {slide.title}
          <Icon fa="angle-double-down"/>
        </h3>
      </div>
    );
  }

  render () {
    const { activeSlide } = this.state;
    const { slides, className } = this.props
    return !slides || !slides.length ? null : (
      <div className={'slide-panel' + (className ? ' ' + className : '')}>
        {slides.map((slide, index) => this.renderSlide(slide, index))}
      </div>
    )
  }
}

export default SlidePanel;
