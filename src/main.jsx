import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./features/home/view/home.jsx";
import ProductDetails from "./features/product-details/view/product-details.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/header';
import { ROUTES } from './utils/ROUTES';

const routes = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.DETAILS,
    element: <ProductDetails />
  },
  {
    path: ROUTES.ANY,
    element: <Home />
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  
)
