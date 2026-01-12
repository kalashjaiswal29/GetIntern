import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ApplyForm from './components/apply_form.jsx'
import Verify from './components/verify.jsx'
import MainSec from './components/mainSec.jsx'

const router = createBrowserRouter([
  
  {path: "/", element: <App /> ,children:[
    {path: "/", element: <MainSec/>},
    {path: "/apply", element: <ApplyForm/>},
  {path: "/verification", element: <Verify/>}
  ]}
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
    </StrictMode>
)
