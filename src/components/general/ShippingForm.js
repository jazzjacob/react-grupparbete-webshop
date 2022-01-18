import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userInfoService from '../../services/userInfoService';
import Cart from './Cart';
import { CartContext } from '../../context/CartContext';

const ShippingForm = () => {
  
  const currentUser = userInfoService;

  const { Cart, setCart} = useContext(CartContext);

  const [orderMade, setOrderMade] = useState(false);
  const { loggedIn } = useContext(UserContext);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: loggedIn ? currentUser.firstName : '',
    lastName: loggedIn ? currentUser.lastName : '',
    phone: loggedIn ? currentUser.phone : '',
    address: loggedIn ? currentUser.address : '',
    postcode: loggedIn ? currentUser.postcode : '',
    town: loggedIn ? currentUser.town : '',
  });

  const navigate = useNavigate();


  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px'
  }

  const formInputStyle = {
    marginBottom: '20px',
    height: '24px'
  }

  const formButtonStyle = {
    height: '40px',
    backgroundColor: 'gray',
    color: 'white'
  }

  const makeOrder = (e) => {
    e.preventDefault();
    alert(JSON.stringify(shippingInfo));
    setOrderMade(true);
    setCart([]);
  }

  const handleInput = (e) => {
    setShippingInfo({...shippingInfo, [e.target.name]: e.target.value});
  }
  console.log(shippingInfo);
  

  return (
    <>
      {!orderMade ? (
         <form style={formStyle} onSubmit={makeOrder}>
         <h3>Shipping address</h3>
   
         <label>First name</label>
         <input
           name='firstName'
           style={formInputStyle}
           onChange={handleInput}
           value={shippingInfo.firstName}/>
   
         <label>Last name</label>
         <input
           name='lastName'
           style={formInputStyle}
           onChange={handleInput}
           value={shippingInfo.lastName}
          />
   
         <label>Phone number</label>
         <input
           name='phone'
           style={formInputStyle}
           onChange={handleInput}
           type='phone'
           value={shippingInfo.phone}
          />
   
         <label>Address</label>
         <input
           name='address'
           style={formInputStyle}
           onChange={handleInput}
           value={shippingInfo.address}
         />
   
         <label>Postcode</label>
         <input
           name='postcode'
           style={formInputStyle}
           onChange={handleInput}
           value={shippingInfo.postcode}
          />
   
         <label>Town/City</label>
         <input
           name='town'
           style={formInputStyle}
           onChange={handleInput}
           value={shippingInfo.town}
          />
   
         <button style={formButtonStyle}>Order</button>
       </form>
      ) : (
        <div>
          <p>Thank you for ordering some hip dudes!</p>
          <button onClick={() => navigate('/')}>Go back to shop</button>
        </div>
      )}
     
  </>  
  );
}

export default ShippingForm;