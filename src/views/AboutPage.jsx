import React from 'react';

import About from 'Content/About';
import AboutPane from 'Ui/AboutPane';
import SectionHeading from 'Ui/SectionHeading';

class AboutPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const panes = About.panes.map((pane, idx) => <AboutPane key={idx} content={pane} />);
    return (
      <div className="AboutPage">
        <grid>
          <SectionHeading text="About" icon="book" />
          {panes}
        </grid>
      </div>
    );
  }
};

export default AboutPage;
