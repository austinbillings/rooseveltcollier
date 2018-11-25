import React from 'react';

class LinkButton extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { href, className, onClick, linkClassName, children, replace } = this.props;
    const isExternalLink = typeof href === 'string' && href.indexOf('http') === 0;
    const clickHandler = evt => typeof onClick === 'function'
      ? onClick(evt)
      : null;
    const target = isExternalLink && !replace
      ? '_blank'
      : '_self';

    return (
      <a href={href || '#'} target={target} className={'link-button ' + (linkClassName || '')}>
        <button className={className || ''} onClick={clickHandler} children={children} />
      </a>
    );
  }
};

export default LinkButton;
