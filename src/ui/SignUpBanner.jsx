import React from 'react';
import SignUpForm from 'Ui/SignUpForm';

import Subscribe from 'Components/Subscribe';
import Globals from 'Meta/Globals';

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
