import React from 'react';

import SignUpForm from 'ui/sign-up-form';
import Subscribe from 'components/subscribe';
import Globals from 'meta/globals';

class SignUpBanner extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="SignUpBanner">
        {Globals.SignUpHeadline}
        {Globals.SignUpSubtitle}
        {/* <SignUpForm /> */}
        <Subscribe />
      </div>
    )
  }
};

export default SignUpBanner;
