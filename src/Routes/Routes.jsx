import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error Page/ErrorPage';
import Home from '../Pages/Home/Home';
import AppDetails from '../Components/AppDetails/AppDetails';
import AllAppPage from '../Pages/AllAppPage/AllAppPage';
import InstalledApps from '../Pages/InstalledApps/InstalledApps';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('/AppData.json'),
        element: <Home />
      },
      {
        path: "/apps",
        loader: () => fetch('/AppData.json'),
        element: <AllAppPage />
      },
      {
        path: "/appdetails/:id",
        loader: () => fetch('/AppData.json'),
        element: <AppDetails />
      },
      {
        path: "/installation",
        element: <InstalledApps />
      }, 
      {
        path: "*",
        element: <ErrorPage />,
      },
    ]
  },
]);