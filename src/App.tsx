import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthView from './views/authorization/AuthView';
import LandingView from './views/LandingView';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import './App.scss';

import Profile from './views/Profile';
import LeftMenu from "./views/left_menu/LeftMenu";

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <LandingView /> },
    { path: '/auth', element: <AuthView /> },
    { path: '/profile', element: <Profile /> }
  ])
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Header/>
      <LeftMenu/>
      <App />
      {/* <Footer /> */}
    </Router>
  )
}

export default AppWrapper;