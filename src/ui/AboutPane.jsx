import React from 'react';

import Overlay from 'Components/Overlay';
import ShadowBox from 'Components/ShadowBox';

class AboutPane extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { heading, body, photo, className } = this.props.content;
    className = 'AboutPane' + (className ? ' ' + className : '');

    return (
      <ShadowBox outerClassName="drop40" className={className}>
        {photo && (
          <box className="xs-12 md-4 about-photo-box">
            <Overlay image={photo} className="about-photo" innerClass="lighting-effects" />
          </box>
        )}
        <box className="xs-12 md-8 about-content">
          {heading && (<box>{heading}</box>)}
          {body && (<box>{body}</box>)}
        </box>
      </ShadowBox>
    )
  }
};

export default AboutPane;
