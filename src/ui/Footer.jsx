import React from 'react';

import Utils from 'Utils/Utils';
import Globals from 'Meta/Globals';
import Socials from 'Meta/Socials';
import NavMenu from 'Ui/NavMenu';
import SocialNav from 'Ui/SocialNav';
import ShadowBox from 'Components/ShadowBox';

class Footer extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { location } = this.props;
    return (
      <footer className="Footer">
        <grid>
          <ShadowBox>
            <row>
              <box className="grow-1 self-center">
                {Globals.FooterInfo}
              </box>
              <box className="grow-1">
                <SocialNav socials={Socials} />
              </box>
              <box className="grow-1 self-center" onClick={() => Utils.scrollToTop()}>
                <NavMenu className="footer-nav" location={location} />
              </box>
            </row>
          </ShadowBox>
        </grid>
      </footer>
    );
  }
};

export default Footer;
