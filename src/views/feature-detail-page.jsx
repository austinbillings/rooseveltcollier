import React from 'react';
import { useParams } from 'react-router-dom';

import SectionHeading from 'ui/section-heading';

export default function FeatureDetailPage () {
  const { feature: id } = useParams();
  const feature = [].find(f => f.id === id);

  if (!feature) {
    return (
      <div className="FeatureDetailPage Page">
        <grid className="Feature">
          <SectionHeading text="Feature not found" />
        </grid>
      </div>
    );
  }

  return (
    <div className="FeatureDetailPage Page">
      <grid className="Feature">
        <SectionHeading text={feature.name} icon="diamond" />
        <div className="Feature-Info">{feature.info}</div>
      </grid>
    </div>
  );
}
