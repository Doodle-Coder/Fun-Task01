import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider,useLocation } from 'react-router-dom';
import Home from '../Home';
import About from '../Tasks';
import Login from '../Login/Login';
import LayoutWrapper from './LayoutWrapper';



const router = createBrowserRouter([
  {
    
    element: <LayoutWrapper  />,  // Use Layout component as the wrapper for all routes
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/your-tasks",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;