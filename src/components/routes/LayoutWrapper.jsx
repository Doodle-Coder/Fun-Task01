import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from '../Navbar';

// Wrapper component to handle Navbar visibility
const LayoutWrapper = () => {
  const location = useLocation();

 
  const noNavbarRoutes = ['/login']; 

  // Check if the current route is in the noNavbarRoutes array
  const showNavbar = !noNavbarRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <Outlet />
    </>
  );
};

export default LayoutWrapper;
