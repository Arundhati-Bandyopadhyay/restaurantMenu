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

const router = createBrowserRouter([
  {
    path: "/",
   
    children: [
      {
        path: '/',
        element: <Menu/>
      },
      {
        path: '/Cart',
        element: <Cart></Cart>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

// https://github.com/ProgrammingHero1/boi-poka-book-vibe/blob/main/src/main.jsx
// https://reactrouter.com/6.30.0/routers/create-browser-router-- check this link 
