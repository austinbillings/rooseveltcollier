import React from 'react';

import FeatureListItem from 'ui/FeatureListItem';
import SectionHeading from 'ui/section-heading';
// import Features from 'content/features';

class FeatureListPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const list = []
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
