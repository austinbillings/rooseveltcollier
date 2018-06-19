import React from 'react';

// import Features from 'Content/Features';
import SectionHeading from 'ui/SectionHeading';
import CardOverlay from 'components/CardOverlay';
import Icon from 'components/Icon';
import ShadowBox from 'components/ShadowBox';
import Overlay from 'components/Overlay';

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
