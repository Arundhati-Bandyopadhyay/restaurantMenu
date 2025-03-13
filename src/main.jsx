import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Menu from './components/menu/Menu.jsx'
import Cart from './components/cart/Cart.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Items from './components/menu/Items.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: '/',
        element: <Menu/>,
        children: [
          {
            index: true, // Render Items when the parent route matches exactly
            element: <Items />,
          },
          {
            path: '/cart',
            element: <Cart />,
          },
        ],
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
