import React from 'react';

class Icon extends React.PureComponent {
  render () {
    const { fa, onClick, style, className: givenClassName } = this.props;
    const className = `icon fa fa-${fa}${givenClassName ? ' ' + givenClassName : ''}`;

    return <i onClick={onClick} style={style} className={className}> </i>
  }
};

export default Icon;
