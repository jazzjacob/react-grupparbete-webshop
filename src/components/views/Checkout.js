import ShippingForm from '../general/ShippingForm';
import LoginForm from '../general/LoginForm';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Cart from '../general/Cart';
import { Link } from 'react-router-dom';

const Checkout = () => {

  const {
    loggedIn,
    setLoggedIn,
    skippedLogin,
    setSkippedLogin
  } = useContext(UserContext);

  console.log(loggedIn);
  console.log(skippedLogin);

  return (
    <>
      <Cart/>
        <Link to="/">Return to Shop</Link>
      <h1>This is the Checkout page</h1>
      <h3>Här nånstans borde varukorg synas</h3>
      {loggedIn || skippedLogin ? <ShippingForm /> : <LoginForm />}
    </>
  );
};

export default Checkout;
// Erik