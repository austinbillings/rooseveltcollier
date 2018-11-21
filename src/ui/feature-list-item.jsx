import React from 'react';
import { Link } from 'react-router-dom';

import Urls from 'meta/urls';
import Overlay from 'components/overlay';
import CardOverlay from 'components/card-overlay';
import ShadowBox from 'components/shadow-box';

class FeatureListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { feature } = this.props;
    const url = Urls.features.one.replace(':feature', feature.id);

    return (
      <Link to={url} className="FeatureListItemWrapper">
        <ShadowBox>
          <Overlay
            image={feature.banner}
            onClick={() => { history.push(url); }}
            position={feature.bannerPosition}
            innerClass="FeatureListItem"
          >
            <CardOverlay align="right" className="redBG">
              <h4 className="w300 caps">{feature.name}</h4>
            </CardOverlay>
          </Overlay>
        </ShadowBox>
      </Link>
    );
  }
};

export default FeatureListItem;
