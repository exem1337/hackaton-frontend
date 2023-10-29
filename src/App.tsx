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
import TestBaseView from './views/TestBaseView';
import MateralsBaseView from './views/MaterialsBaseView';
import PageNotFound from './views/PageNotFound';
import MyApplications from './views/my-applications-page/MyApplications';

const App = () => {
   useEffect(() => {
      AuthService.refresh();
   }, [])

   const routes = useRoutes([
      { path: '/', element: <LandingView /> },
      { path: '/auth', element: <AuthView /> },
      { path: '/profile', element: <Profile /> },
      { path: '/department/:id/tests', element: <TestsView /> },
      { path: '/tests/edit/:id', element: <TestEditView /> },
      { path: '/tests/:id', element: <TestCompleteView /> },
      { path: '/topics/:id/test-create', element: <TestEditView /> },
      { path: '/portal', element: <PortalView /> },
      { path: '/portal/:id', element: <PortalView /> },
      { path: '/department/:id', element: <DepartmentView /> },
      { path: '/conversions', element: <Conversions /> },
      { path: '/admin', element: <AdminPage /> },
      { path: '/signup', element: <SignupView /> },
      { path: '/employee', element: <DbEmployeePage /> },
      {path: '/employee', element: <DbEmployeePage/>},
      {path: '/my_applications', element: <MyApplications/>},
      {path: '/*', element: <PageNotFound/>},
      { path: '/testbase', element: <TestBaseView /> },
      { path: '/materials', element: <MateralsBaseView /> },
   ])
   return routes;
}

const AppWrapper = () => {
   return (
      <Router>
         <div className='d-flex flex-column min-vh-100'>
         <Header />
            <div className='flex-grow-1'>

               <div className="app-wrapper ">
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