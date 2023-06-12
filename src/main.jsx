import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Instructors from './components/Intructors/Instructors.jsx';
import Classes from './components/Classes/Classes.jsx';
import Error from './components/404/Error.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import ThemeProvider from './components/ThemeProvider/ThemeProvider.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import MySelectedClasses from './components/Pages/MySelectedClasses/MySelectedClasses.jsx';
import MyEnrolledClasses from './components/Pages/MyEnrolledClasses/MyEnrolledClasses.jsx';
import Payment from './components/Pages/Payment/Payment.jsx';
import ManageUsers from './components/Admin/ManageUsers.jsx';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ManageClasses from './components/Pages/ManageClasses/ManageClasses.jsx';
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instructors',
        element: <Instructors></Instructors>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }

    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'myClasses',
        element: <MySelectedClasses></MySelectedClasses>
      },
      {
        path: 'myEnrolledClasses',
        element: <MyEnrolledClasses></MyEnrolledClasses>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'manageUsers',
        element: <ManageUsers></ManageUsers>
      },
      {
        path:'manageClasses',
        element:<ManageClasses></ManageClasses>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
