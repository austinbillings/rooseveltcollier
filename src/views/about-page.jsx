import React from 'react';

import aboutSections from 'data/about-sections';
import AboutPane from 'ui/AboutPane';

class AboutPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const panes = aboutSections.map((pane, idx) => <AboutPane key={idx} content={pane} />);
    return (
      <div className="about-page">
        {panes}
      </div>
    );
  }
};

export default AboutPage;
