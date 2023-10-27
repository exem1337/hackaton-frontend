import React from 'react';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import './App.scss';
import AuthView from './views/AuthView';
import LandingView from './views/LandingView';
import Profile from './views/Profile';

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
      <App />
    </Router>
  )
}

export default AppWrapper;