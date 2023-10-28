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
import Conversions from "./views/page-left-menu/conversions-page/conversions";
import PortalView from './views/PortalView';
import DepartmentView from './views/DepartmentView';
import AdminPage from "./views/admin-page/AdminPage";

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <LandingView /> },
    { path: '/auth', element: <AuthView /> },
    { path: '/profile', element: <Profile /> },
    { path: '/tests', element: <TestsView /> },
    { path: '/tests/:id', element: <TestCompleteView /> },
    { path: '/portal/:id', element: <PortalView /> },
    { path: '/department/:id', element: <DepartmentView /> },
    { path: '/conversions', element: <Conversions /> },
     {path: '/admin', element: <AdminPage/>},
  ])
  return routes;
}

const AppWrapper = () => {
   return (
      <Router>
         <Header/>
         <div className="app-wrapper">
            <LeftMenu/>
            <App/>
         </div>
         {/* <Footer /> */}
      </Router>
   )
}

export default AppWrapper;