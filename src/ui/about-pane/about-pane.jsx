import React from 'react';

import './about-pane.scss';
import Overlay from 'components/overlay';

class AboutPane extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { heading, body, image, className: givenClassName } = this.props.content;
    const backgroundImage = image && image.url ? `url('${image}')` : null;
    const imageStyle = {};

    if (image && image.url)
      imageStyle.backgroundImage = `url('${image.url}')`;
    if (image && image.position)
      imageStyle.backgroundPosition = image.position;

    const className = 'about-pane '
      + (givenClassName || '')
      + (image ? ' has-image ' : ' ');

    return (
      <div className={className}>
        {!image || !image.url ? null : (
          <div className="about-image" style={imageStyle} />
        )}
        <box className="about-content">
          {heading && (<box className="about-content-heading">{heading}</box>)}
          {body && (<box className="about-content-body">{body}</box>)}
        </box>
      </div>
    )
  }
};

export default AboutPane;
