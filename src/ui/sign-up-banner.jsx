import React from 'react';
import SignUpForm from 'ui/SignUpForm';

import Subscribe from 'components/Subscribe';
import Globals from 'meta/Globals';

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
