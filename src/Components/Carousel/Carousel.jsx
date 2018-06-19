import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Icon from 'components/Icon';
import ProgressBar from 'components/ProgressBar';

const SlideDuration = 100;

class Carousel extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentIndex: 0,
      currentPercent: 0,
      changeAt: Date.now() + SlideDuration,
      attention: false,
      timerInstance: null
    };

    this.handleGoNext = this.handleGoNext.bind(this);
    this.handleGoPrev = this.handleGoPrev.bind(this);
    this.renderCircleNav = this.renderCircleNav.bind(this);
    this.renderControls = this.renderControls.bind(this);
    this.renderScrubber = this.renderScrubber.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
    this.updateCurrentPercent = this.updateCurrentPercent.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.enableAttention = this.enableAttention.bind(this);
    this.disableAttention = this.disableAttention.bind(this);
  }

  componentDidMount () {
    const { autoScroll } = this.props;
    if (autoScroll) {
      let timerInstance = setInterval(this.updateCurrentPercent, 100);
      this.setState({ timerInstance });
    } else {
      if (this.state.timerInstance) clearTimeout(this.state.timerInstance);
      this.setState({ timerInstance: null });
    }
  }

  handleGoNext () {
    const { slides } = this.props;
    let { currentIndex } = this.state;
    let nextIndex = ++currentIndex <= (slides.length - 1) ? currentIndex : 0;
    this.navigateTo(nextIndex);
  }

  handleGoPrev () {
    const { slides } = this.props;
    let { currentIndex } = this.state;
    let nextIndex = --currentIndex >= 0 ? currentIndex : slides.length - 1;
    this.navigateTo(nextIndex);
  }

  renderPrevArrow () {
    const { slides } = this.props;
    return slides.length === 1 ? null : (
      <div className="Arrow PrevArrow" onClick={this.handleGoPrev}>
        <Icon fa="angle-left" />
      </div>
    )
  }

  renderNextArrow () {
    const { slides } = this.props;
    return slides.length === 1 ? null : (
      <div className="Arrow NextArrow" onClick={this.handleGoNext}>
        <Icon fa="angle-right" />
      </div>
    )
  }

  updateCurrentPercent () {
    if (!this.refs.main) return;
    let { changeAt, attention } = this.state;

    let startTime = changeAt - SlideDuration;
    let currentElapsed = (Date.now() - startTime);
    let currentPercent =  currentElapsed / SlideDuration;

    if (attention) {
      return this.setState({ changeAt: Date.now() + (SlideDuration - currentElapsed) });
    };
    if (currentPercent >= 100) {
      return this.handleGoNext();
    } else {
      this.setState({ currentPercent });
    }
  }

  navigateTo (idx) {
    this.setState({ currentIndex: idx, changeAt: Date.now() + SlideDuration });
  }

  renderCircleNav () {
    let { slides } = this.props;
    let { currentIndex } = this.state;

    return slides.length === 1 ? null : slides.map((slide, idx) => (
      <a onClick={() => this.navigateTo(idx)} key={idx}>
        <Icon fa={currentIndex === idx ? 'circle' : 'circle-o'} />
      </a>
    ));
  }

  renderControls () {
    const circles = this.renderCircleNav();
    return (
      <row className="Controls">
        {circles}
      </row>
    );
  }

  renderProgressBar () {
    let { progressColor, autoScroll } = this.props;
    if (!autoScroll) return null;
    let { currentPercent } = this.state;
    return <ProgressBar percent={currentPercent} color={progressColor} height={3} />
  }

  renderScrubber () {
    const { slides, scrub } = this.props;
    const { currentIndex } = this.state;
    const currentPosition = ((currentIndex + 1) / slides.length) * 100;
    return !scrub ? null : (
      <ProgressBar percent={currentPosition} interactive />
    );
  }

  resetSlideTimer () {
    let changeAt = Date.now() + SlideDuration;
  }

  enableAttention () {
    this.setState({ attention: true });
  }

  disableAttention () {
    this.setState({ attention: false });
  }

  render () {
    const { slides } = this.props;
    const { currentIndex } = this.state;
    const { enableAttention, disableAttention } = this;
    const current = slides[currentIndex];
    const linkify = !!current.url;

    const Wrapper = !current.url
      ? 'div'
      : current.url.toLowerCase().substring(0,4) === 'http'
        ? 'a'
        : Link;
    const controls = this.renderControls();
    const nextArrow = this.renderNextArrow();
    const prevArrow = this.renderPrevArrow();
    const progressBar = this.renderProgressBar();
    const scrubber = this.renderScrubber();

    return (
      <div
        className="Carousel"
        ref="main"
        onMouseEnter={enableAttention}
        onMouseLeave={disableAttention}
      >
        {nextArrow}
        {prevArrow}
        <Wrapper to={current.url} href={current.url} target={'_blank'}>
          {current.content}
        </Wrapper>
        {progressBar}
        {controls}
        {scrubber}
      </div>
    );
  }
};


export default Carousel;
