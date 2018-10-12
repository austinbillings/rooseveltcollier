import React from 'react';
import {
  Link,
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
  browserHistory as history
} from 'react-router-dom';

import './Root.scss';
import Urls from 'meta/Urls';
import Header from 'ui/Header';
import Footer from 'ui/Footer';

import HomePage from 'Views/HomePage';
import TourPage from 'Views/TourPage';
import AboutPage from 'Views/AboutPage';
import MusicPage from 'Views/MusicPage';
import VideoPage from 'Views/VideoPage';
import ContactPage from 'Views/ContactPage';
import FeatureListPage from 'Views/FeatureListPage';
import FeatureDetailPage from 'Views/FeatureDetailPage';
import NotFound from 'Views/NotFound';

class Root extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Router history={history}>
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
