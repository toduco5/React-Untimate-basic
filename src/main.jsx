import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import UserPage from './pages/User';
import ProductPage from './pages/product';
import './styles/global.css'
import TodoApp from './assets/style/TodoApp.jsx';
import ErrorPage from './pages/error.jsx';
import { AuthWraper } from './components/context/auth.context.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<ErrorPage/>,
    children: [
      {
        index:true,
        element: <TodoApp />
      },
      {
        path: "/product",
        element: <ProductPage />
      },
      {
        path: "/User",
        element: <UserPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
   
    <AuthWraper>
    <RouterProvider router={router} />
    </ AuthWraper>
  /* </React.StrictMode>, */
)
