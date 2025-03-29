import {createBrowserRouter}from "react-router-dom";
import Home from "../components/Home";
import Layout from "./Layout";

const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      children:[
        {
          index:true,Component:Home
        }
      ]
    },
  ]);

  export default router;