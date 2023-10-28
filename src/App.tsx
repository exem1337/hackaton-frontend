import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthView from './views/AuthView';
import LandingView from './views/LandingView';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import './App.scss';

import Profile from './views/Profile';
import LeftMenu from "./components/LeftMenu";
import Tests from "./views/page-left-menu/task-page/Tests";

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <LandingView /> },
    { path: '/auth', element: <AuthView /> },
    { path: '/profile', element: <Profile /> },
    { path: '/education', element: <Profile /> },
    { path: '/test', element: <Tests/> },
  ])
  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Header/>
      <div className="app-wrapper">
        <LeftMenu/>
        <App />
      </div>
      {/* <Footer /> */}
    </Router>
  )
}

export default AppWrapper;