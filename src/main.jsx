import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider  , createBrowserRouter} from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/About/about.jsx'
import { Contact } from './components/contact/contact.jsx'
import Services from './components/services/services.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children:[
      {
      path: "",
      element: <Home />
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "service",
        element: <Services/>
      },
     
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
