import React from 'react';

import IconMenu from 'Components/IconMenu';
import SocialUtils from 'Utils/SocialUtils';

class SocialNav extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    let { socials, name } = this.props;
    name = (name ? name : 'Vintage League Music');
    const list = SocialUtils.inject(socials, { name });

    return (
      <div className="SocialNav">
        <IconMenu list={list} />
      </div>
    );
  }
};

export default SocialNav;
