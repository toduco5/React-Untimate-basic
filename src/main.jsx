import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/style/todolist.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <>Login Page</>
  },
  {
    path: "/register",
    element: <>Register Page</>
  },
  {
    path: "/contact",
    element: <>Contact Page</>
  },
  {
    path: "/User",
    element: <>User Page</>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
