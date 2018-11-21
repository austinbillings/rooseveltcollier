import React from 'react';
import { Link } from 'react-router-dom';
import SocialNav from 'ui/social-nav';

import './Header.scss';
import Socials from 'meta/Socials';
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
            {/*<img src="/assets/cartoon.png" alt="" className="logo-icon" />*/}
            <Link to={Urls.home}>
              <img src="/assets/logo.png" alt="Roosvelt Collier (Textual Logo)" className="logo" />
            </Link>
            <SocialNav socials={Socials} />
            <NavMenu className="header-nav" location={location} />
          </row>
        </grid>
      </header>
    );
  }
};

export default Header;
