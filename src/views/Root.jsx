import React from 'react';
import {
  Link,
  Route,
  Redirect,
  BrowserRouter as Router,
  browserHistory as history
} from 'react-router-dom';

import Urls from 'Meta/Urls';
import Header from 'Ui/Header';
import Footer from 'Ui/Footer';

import HomePage from 'Views/HomePage';
import AboutPage from 'Views/AboutPage';
import FeatureListPage from 'Views/FeatureListPage';
import FeatureDetailPage from 'Views/FeatureDetailPage';

class Root extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <Router history={history}>
        <div className="Root">
          <Route render={({ location }) => <Header location={location} />} />
          <Route exact path={Urls.index} render={() => <Redirect push to={Urls.home} />} />
          <Route exact path={Urls.home} component={HomePage} />
          <Route exact path={Urls.about.index} component={AboutPage} />
          <Route exact path={Urls.features.index} component={FeatureListPage} />
          <Route exact path={Urls.features.one} history={history} component={FeatureDetailPage} />
          <Route render={({ location }) => <Footer location={location} />} />
          <div className="page-background" />
        </div>
      </Router>
    );
  }
};

export default Root;
