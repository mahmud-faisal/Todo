import { createRoot } from 'react-dom/client'
import './index.css'

import router from './router/Router.jsx'
import { RouterProvider } from 'react-router'
import  StoreContextProvider  from './context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StoreContextProvider>
    <RouterProvider router={router} />
  // </StoreContextProvider>
)