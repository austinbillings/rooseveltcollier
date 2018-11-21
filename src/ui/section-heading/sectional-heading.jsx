import React from 'react';

import './section-heading.scss';
import Icon from 'components/icon';

class SectionHeading extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { text, icon, children, color, align } = this.props;
    const styles = { box: {}, text: {}, divider: {} };
    if (color) {
      styles.text.color = color;
      styles.divider.borderColor = color;
    }
    if (align) {
      switch (align.toLowerCase()) {
        case 'left':
          styles.divider.marginLeft = 0;
          styles.box.alignItems = 'flex-start'; break;
        case 'right':
          styles.divider.marginRight = 0;
          styles.box.alignItems = 'flex-end'; break;
        case 'center':
          styles.box.alignItems = 'center';
      }
    }

    return (
      <div className="section-heading" style={styles.box}>
        <h3 style={styles.text}>
          {icon && <Icon fa={icon} />}
          {text}
          {children}
        </h3>
        <hr style={styles.divider} />
      </div>
    );
  }
};

export default SectionHeading;
