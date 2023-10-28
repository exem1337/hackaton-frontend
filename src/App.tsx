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
import TestsView from './views/TestsView';
import TestCompleteView from './views/TestCompleteView';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <LandingView /> },
    { path: '/auth', element: <AuthView /> },
    { path: '/profile', element: <Profile /> },
    { path: '/education', element: <Profile /> },
    { path: '/tests', element: <TestsView /> },
    { path: '/tests/:id', element: <TestCompleteView /> }
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