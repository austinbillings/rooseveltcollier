import React from 'react';

// import Features from 'Content/Features';
import SectionHeading from 'ui/section-heading';
import CardOverlay from 'components/card-overlay';
import Icon from 'components/icon';
import ShadowBox from 'components/shadow-box';
import Overlay from 'components/overlay';

class FeatureDetailPage extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    const id = this.props.match.params.feature;
    const feature = [].find(f => f.id === id);

    return (
      <div className="FeatureDetailPage Page">
        <grid className="Feature">
          <SectionHeading text="Special Feature" icon="diamond" />
          <ShadowBox>
            <Overlay className="Feature-Header" image={feature.banner} position={feature.bannerPosition}>
              <CardOverlay className="Feature-Header-Text" align="left">
                <h2>
                  {feature.name}
                </h2>
              </CardOverlay>
            </Overlay>
          </ShadowBox>

          <row>
            <box className="xs-12 md-11 md-offset-1">
              <ShadowBox>
                <div className="Feature-Info">
                  {feature.info}
                </div>
              </ShadowBox>
            </box>
          </row>

          <row>
            {feature.content}
          </row>

        </grid>
      </div>
    );
  }
};

export default FeatureDetailPage;
