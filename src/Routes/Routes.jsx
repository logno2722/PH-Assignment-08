import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error Page/ErrorPage';
import Home from '../Pages/Home/Home';
import AppPage from '../Components/AppPage/AppPage';
import AppDetails from '../Components/AppDetails/AppDetails';


export const router = createBrowserRouter([
  {
    path: "/",
     Component: Root,
     errorElement: <ErrorPage></ErrorPage>,
     children:[
      {
        index:true,
        loader:()=>fetch('./AppData.json'),
        path:"/",
        Component:Home
      },
      {
        path:"/apps",
        Component:AppPage
      },
      {
        path:"/appdetails/:id",
        loader:()=>fetch('./AppData.json'),
        Component:AppDetails
      }
     ]
     
  },

    
]);