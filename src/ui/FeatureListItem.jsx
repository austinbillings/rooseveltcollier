import React from 'react';
import { Link } from 'react-router-dom';

import Urls from 'Meta/Urls';
import Overlay from 'Components/Overlay';
import CardOverlay from 'Components/CardOverlay';
import ShadowBox from 'Components/ShadowBox';

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
