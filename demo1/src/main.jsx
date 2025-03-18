import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Page/Home.jsx'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Feature from './Page/Feature.jsx'
import ExpandCategory from './Page/ExpandCategory.jsx'
import About from './Page/About.jsx'






const appRouter = createBrowserRouter([
  {
    path :"/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/feature",
        element:<Feature/>
      },
      {
        path:"/feature/:cat",
        element:<ExpandCategory />
      },
      {
        path: "/about",
        element: <About/>
      }
    

    ]
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={appRouter}/>
  </StrictMode>,
)
