import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home";




const router =createBrowserRouter([
    {
      path: "/",
      Component: Main,
      children: [
        { index: true, Component: Home },
        // { path: "projects", Component: Projects },
        // { path: "contact", Component: Contact },
        // { path: "about", Component: About },
        // { path: "resume", Component: Resume }
      ],
    },
  ]);

  export default router;