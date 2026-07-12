import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/about.jsx' 
import Supcont from './components/Supcont/Supcont.jsx' //updated
import Topser from './components/Topser/Topser.jsx'//updated


import '@fortawesome/fontawesome-free/css/all.min.css';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "supcont",
        element: <Supcont />
      },
      {
        path: "topser",
        element: <Topser />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
