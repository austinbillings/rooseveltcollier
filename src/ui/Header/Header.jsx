import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import Urls from 'meta/Urls';
import NavMenu from 'ui/NavMenu';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { location } = this.props;
    return (
      <header className="header">
        <grid>
          <row>
            <box className="xs-10 xs-offset-1 sm-6 sm-offset-0 md-4 self-center text-center">
              <Link to={Urls.home}>
                <img src="/assets/logo.png" alt="Roosvelt Collier (Textual Logo)" className="logo" />
              </Link>
            </box>
            <box className="xs-12 md-8 self-center items-center justify-end">
              <NavMenu className="header-nav" location={location} />
            </box>
          </row>
        </grid>
      </header>
    );
  }
};

export default Header;
