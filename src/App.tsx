import React, { useEffect } from 'react';
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
import AuthService from './service/AuthService';
import SignupView from './views/SignupView';
import TestEditView from './views/TestsEditView';
import DbEmployeePage from "./views/db-employee-page/DbEmployeePage";

const App = () => {
   useEffect(() => {
      AuthService.refresh();
   }, [])

   const routes = useRoutes([
      { path: '/', element: <LandingView /> },
      { path: '/auth', element: <AuthView /> },
      { path: '/profile', element: <Profile /> },
      { path: '/tests', element: <TestsView /> },
      { path: '/tests/edit/:id', element: <TestEditView /> },
      { path: '/tests/:id', element: <TestCompleteView /> },
      { path: '/portal', element: <PortalView /> },
      { path: '/department/:id', element: <DepartmentView /> },
      { path: '/conversions', element: <Conversions /> },
      { path: '/admin', element: <AdminPage /> },
      { path: '/signup', element: <SignupView /> },
      { path: '/employee', element: <DbEmployeePage /> },
   ])
   return routes;
}

const AppWrapper = () => {
   return (
      <Router>
         <div>
         <Header />
            <div className='d-flex justify-content-center'>
               
               <div className="app-wrapper">
                  <LeftMenu />
                  <App />
               </div>
            </div>
            <Footer />
         </div>
      </Router>
   )
}

export default AppWrapper;