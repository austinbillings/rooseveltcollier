import React from 'react';

import FeatureListItem from 'Ui/FeatureListItem';
import SectionHeading from 'Ui/SectionHeading';
import Features from 'Content/Features';

class FeatureListPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const list = Features
      .filter(feature => !feature.hidden)
      .map(feature => (
        <FeatureListItem
          key={feature.id}
          feature={feature}
        />
      ));

    return (
      <div className="Page FeatureListPage">
        <grid>
          <SectionHeading text="Features" icon="diamond" />
          {list}
        </grid>
      </div>
    );
  }
};

export default FeatureListPage;
