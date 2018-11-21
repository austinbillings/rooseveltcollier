import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.scss';
import Icon from 'components/icon';

class NotFound extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="not-found">
        <h1>404</h1>
        <p>Sorry, we couldn't find the page you're looking for.</p>
        <Link to="/home">
          <button>
            Go Home <Icon fa="home"/>
          </button>
        </Link>
      </div>
    )
  }
};

export default NotFound;
