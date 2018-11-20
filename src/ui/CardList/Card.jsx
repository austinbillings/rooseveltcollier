import React from 'react';

import './Card.scss';

class Card extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { axis, title, image, accent, content, action, children, className } = this.props;

    const imageStyle = !image || !image.url ? null : {
      backgroundImage: `url(${image.url})`,
      backgroundPosition: image.position ? image.position : 'center center'
    };

    const fullClassName = ['card', `card-axis-${axis}`, className].join(' ');

    return (
      <div className={fullClassName}>
        {!image || !image.url ? null : (
          <div className="card-image" style={imageStyle}/>
        )}
        <div className="card-body">
          {!title ? null : (
            <div className="card-title" style={{ backgroundColor: accent ? accent : 'black' }}>{title}</div>
          )}
          {!content && !children ? null : (
            <div className="card-content">
              {content || null}
              {children || null}
            </div>
          )}
          {!action || !action.text || !action.url ? null : (
            <div className="card-action">
              <a href={action.url}>
                <button>
                  {action.text}
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
};

Card.defaultProps = {
  axis: 'y'
};

export default Card;
