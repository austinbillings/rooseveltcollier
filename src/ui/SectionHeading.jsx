import React from 'react';

import Icon from 'Components/Icon';

class SectionHeading extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { text, icon, children } = this.props;
    return (
      <div className="SectionHeading">
        <hr />
        <h3>
          {icon && <Icon fa={icon} />}
          {text}
          {children}
        </h3>
        <hr />
      </div>
    );
  }
};

export default SectionHeading;
