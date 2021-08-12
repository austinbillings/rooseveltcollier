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
    const rel = isExternalLink
      ? 'external noopener noreferrer nofollow'
      : '';
    const linkProps = {
      rel,
      target,
      href: href || '#',
      className: 'link-button ' + (linkClassName || '')
    };
    const buttonProps = {
      className: className || '',
      onClick: clickHandler,
      children
    };

    return (
      <a {...linkProps}>
        <button {...buttonProps} />
      </a>
    );
  }
};

export default LinkButton;
