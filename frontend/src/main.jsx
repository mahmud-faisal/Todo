import ReactDOM from 'react-dom/client'
import './index.css'
import routers from './router/routes'
import { RouterProvider } from 'react-router-dom';



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={routers} />
);
