import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from '../src/pages/Home.jsx'
import Contact from '../src/pages/Contact.jsx'
import About from '../src/pages/About.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {index: true, element: <Home/>},
      {path: 'contact', element: <Contact/>},
      {path: 'about', element: <About/>},
      {path: '*', element: <PageNotFound/>},
    ]
  }
]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
