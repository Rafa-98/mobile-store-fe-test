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

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <ProductDetails />
  },
  {
    path: "*",
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
