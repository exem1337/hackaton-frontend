import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import './App.scss';
import AuthView from './views/AuthView';
import LandingView from './views/LandingView';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <LandingView /> },
    { path: '/auth', element: <AuthView /> }
  ])

  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <Header/>
      <Footer/>
      
      <App />
    </Router>
  )
}

export default AppWrapper;