import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProvider from './context/UserContext';
import CartProvider from './context/CartContext';

ReactDOM.render(
  <UserProvider>
    <CartProvider>
    <App />
    </CartProvider>
  </UserProvider>,
  document.getElementById('root')
);