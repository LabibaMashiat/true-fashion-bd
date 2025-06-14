import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import { router } from './Routes/Routes.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <div className="max-w-full mx-auto">
    <RouterProvider router={router} />
    </div>
    
    
  </StrictMode>,
)

