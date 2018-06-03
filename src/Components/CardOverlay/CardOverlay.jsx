import React from 'react';

class CardOverlay extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { children, className, align } = this.props;
    const _className = 'inner '
      + (className ? className : '')
      + (align ? ' align-' + align : '');

    return (
      <div className={'CardOverlay'}>
        <div className={_className}>
          {children}
        </div>
      </div>
    )
  }
};

export default CardOverlay;
