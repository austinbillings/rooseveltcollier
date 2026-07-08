import React from 'react';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter as Router,
  useLocation,
} from 'react-router-dom';

import './App.css';
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

function Chrome ({ children }) {
  const location = useLocation();
  return (
    <div className="Root">
      <Header location={location} />
      {children}
      <Footer location={location} />
      <div className="page-background" />
    </div>
  );
}

export default function App () {
  return (
    <Router>
      <Chrome>
        <Routes>
          <Route path={Urls.index} element={<Navigate replace to={Urls.home} />} />
          <Route path={Urls.home} element={<HomePage />} />
          <Route path={Urls.about.index} element={<AboutPage />} />
          <Route path={Urls.music.index} element={<MusicPage />} />
          <Route path={Urls.contact} element={<ContactPage />} />
          <Route path={Urls.tour} element={<TourPage />} />
          <Route path={Urls.video.index} element={<VideoPage />} />
          <Route path={Urls.features.index} element={<FeatureListPage />} />
          <Route path={Urls.features.one} element={<FeatureDetailPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Chrome>
    </Router>
  );
}
