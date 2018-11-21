import React from 'react';

import './social-nav.scss';
import IconMenu from 'components/icon-menu';
import SocialUtils from 'Utils/SocialUtils';

class SocialNav extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { socials, name: givenName } = this.props;
    const name = (givenName ? givenName : 'Connect With Us');
    const list = SocialUtils.inject(socials, { name });

    return (
      <div className="social-nav">
        <IconMenu list={list} />
      </div>
    );
  }
};

export default SocialNav;
