import ShippingForm from '../general/ShippingForm';
import LoginForm from '../general/LoginForm';
import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Checkout = () => {

  const { loggedIn, setLoggedIn, skipLogin, setSkipLogin } = useContext(UserContext);
  console.log(loggedIn);
  console.log(skipLogin);

  return (
    <>
      <h1>This is the Checkout page</h1>
      {loggedIn || skipLogin ? <ShippingForm /> : <LoginForm />}
    </>
  );
};

export default Checkout;
// Erik