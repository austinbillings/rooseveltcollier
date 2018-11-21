import React from 'react';

import './footer.scss';
import { scrollToTop } from 'utils/dom';
import globals from 'meta/globals';
import Socials from 'meta/socials';
import NavMenu from 'ui/nav-menu';
import SocialNav from 'ui/social-nav';
import ShadowBox from 'components/shadow-box';

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
