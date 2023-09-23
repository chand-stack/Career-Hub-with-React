import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Components/Root/Root';
import AppliedJobs from './Components/Root/AppliedJobs/AppliedJobs';
import Blog from './Components/Root/Blog/Blog';
import Home from './Components/Root/Home/Home';
import JobDetail from './Components/JobDetail/JobDetail';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    children: [
      {
        path:'/applied',
        element: <AppliedJobs/>,
        loader : () => fetch('../public/jobs.json')
      },
      {
        path:'/blog',
        element: <Blog/>
      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/detail/:Id',
        element: <JobDetail></JobDetail>,
        loader: () => fetch('../public/jobs.json')
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
