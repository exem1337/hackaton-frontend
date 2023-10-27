import React from 'react';

import {
  BrowserRouter as Router,
  createBrowserRouter,
  useRoutes,
} from "react-router-dom";
import './App.scss';
import AuthView from './views/AuthView';

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <AuthView /> },
  ])

  return routes;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default AppWrapper;