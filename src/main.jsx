import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from './pages/index.jsx';
import NewsFire from './pages/NewsFire.jsx';

// main routes url
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path:'newsfire/',
    element:<NewsFire/>,
  }
  ,{
    path:'*',
    element:<div className='text-red-500 font-extrabold text-3xl'>The focus wasn't on this page hence, very little was done</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
