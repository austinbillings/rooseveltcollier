import React from 'react';

import './Footer.scss';
import { scrollToTop } from 'utils/Dom';
import globals from 'meta/Globals';
import Socials from 'meta/Socials';
import NavMenu from 'ui/NavMenu';
import SocialNav from 'ui/social-nav';
import ShadowBox from 'components/ShadowBox';

class Footer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { location } = this.props;
    return (
      <footer className="footer">
        <div className="footer-item">
          {globals.FooterInfo}
        </div>
        <div className="footer-item">
          <SocialNav socials={Socials} />
        </div>
        <div className="footer-item" onClick={() => scrollToTop()}>
          <NavMenu className="footer-nav" location={location} />
        </div>
      </footer>
    );
  }
};

export default Footer;
