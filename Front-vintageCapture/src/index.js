import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import UserProvider from './context/UserProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductProvider from './context/products/ProductProvider';
import CartProvider from './context/cartContext/CartProvider';
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
      <BrowserRouter>
        <UserProvider>
          <ProductProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductProvider>
        </UserProvider>
      </BrowserRouter>
   
);

