import {
    createHashRouter,
  } from "react-router-dom";
import Home from "./Component/Home/Home";
import WebDevelopment from "./Component/WebDevelopment/WebDevelopment";
  
  export const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/WebDevelopment",
      element: <WebDevelopment />,
    },
  
  ]);
  