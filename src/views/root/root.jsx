import React from 'react';
import {
  Link,
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom';

import './root.scss';
import Urls from 'meta/urls';
import Header from 'ui/header';
import Footer from 'ui/footer';

import NotFound from 'views/not-found';
import HomePage from 'views/home-page';
import TourPage from 'views/tour-page';
import AboutPage from 'views/about-page';
import MusicPage from 'views/music-page';
import VideoPage from 'views/video-page';
import ContactPage from 'views/contact-page';
import FeatureListPage from 'views/feature-list-page';
import FeatureDetailPage from 'views/feature-detail-page';

class Root extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <div className="Root">
          <Route render={({ location }) => <Header location={location} />} />
          <Switch>
            <Route exact path={Urls.index} render={() => <Redirect push to={Urls.home} />} />
            <Route exact path={Urls.home} component={HomePage} />
            <Route exact path={Urls.about.index} component={AboutPage} />
            <Route exact path={Urls.music.index} component={MusicPage} />
            <Route exact path={Urls.contact} component={ContactPage} />
            <Route exact path={Urls.tour} component={TourPage} />
            <Route exact path={Urls.video.index} component={VideoPage} />
            <Route exact path={Urls.features.index} component={FeatureListPage} />
            <Route exact path={Urls.features.one} history={history} component={FeatureDetailPage} />
            <Route component={NotFound}/>
          </Switch>
          <Route render={({ location }) => <Footer location={location} />} />
          <div className="page-background" />
        </div>
      </Router>
    );
  }
};

export default Root;
