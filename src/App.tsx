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
import LeftMenu from "./views/left-menu/LeftMenu";
import Tests from "./views/page-left-menu/task-page/Tests";

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <LandingView /> },
    { path: '/auth', element: <AuthView /> },
    { path: '/profile', element: <Profile /> },
     { path: '/education', element: <Profile /> },
     { path: '/test', element: <Tests/> },
     // { path: '/profile', element: <Profile /> },
     // { path: '/profile', element: <Profile /> },
     // { path: '/profile', element: <Profile /> },
     // { path: '/profile', element: <Profile /> },
     // { path: '/profile', element: <Profile /> },
     // { path: '/profile', element: <Profile /> }

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