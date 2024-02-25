import {
    createHashRouter,
  } from "react-router-dom";
import Home from "./Component/Home/Home";
  
  export const router = createHashRouter([
    {
      path: "/",
      element: <Home />,
    },
  
  ]);
  