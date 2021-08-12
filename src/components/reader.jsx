import React from 'react';

import LightBox from 'components/light-box';
import Carousel from 'components/carousel';

class Reader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      activePhoto: null
    };

    this.setActivePhoto = this.setActivePhoto.bind(this);
    this.clearActivePhoto = this.clearActivePhoto.bind(this);
  }

  setActivePhoto (activePhoto) {
    this.setState({ activePhoto });
  }

  clearActivePhoto () {
    this.setState({ activePhoto: null });
  }

  render () {
    const { pages, imageSet } = this.props;
    const slides = pages.map((page, idx) => ({
      ...page,
      content: (
        <div
          key={idx}
          onClick={() => this.setActivePhoto(imageSet[idx * 2])}
          children={page.content}
        />
      )
    }));

    return (
      <div className="Reader drop40">
        <Carousel slides={slides} />

        {!imageSet ? null : (
          <LightBox
            photoList={imageSet}
            photo={this.state.activePhoto}
            onClose={this.clearActivePhoto}
            onNavigate={this.setActivePhoto}
          />
        )}
      </div>
    );
  }
};

export default Reader;
