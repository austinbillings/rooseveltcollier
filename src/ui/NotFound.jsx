import React from 'react';
import { Link } from 'react-router-dom';

import Urls from 'meta/Urls';
import Icon from 'components/Icon';

class NotFound extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { children, id, name } = this.props;
    console.log('not found');
    return (
      <grid className="NotFound stack">
        <h2><span className="red">404: </span>{name ? name : 'Page'} Not Found</h2>
        {children}
      </grid>
    );
  }
}

export default NotFound;
