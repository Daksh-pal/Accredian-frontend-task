import React from 'react';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from './components/AboutUs';
import ReferEarn from './components/ReferEarn'
import Resources from './components/Resources';
import LandingPage from './components/LandingPage';

const router = createBrowserRouter([
  {
    path:"/",
    element:<LandingPage/>
  },
  {
    path: "/refer",
    element: <ReferEarn/>, 
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
  {
    path: "/resources",
    element: <Resources/>
  }
]);

const App = () => {
  return (
    <RouterProvider router={router}>
    </RouterProvider>
  );
};

export default App;