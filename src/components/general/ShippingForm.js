import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ShippingForm = () => {

  const [orderMade, setOrderMade] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    postcode: '',
    town: '',
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
           onChange={handleInput} />
   
         <label>Last name</label>
         <input
           name='lastName'
           style={formInputStyle}
           onChange={handleInput} />
   
         <label>Phone number</label>
         <input
           name='phone'
           style={formInputStyle}
           onChange={handleInput}
           type='phone'/>
   
         <label>Address</label>
         <input
           name='address'
           style={formInputStyle}
           onChange={handleInput} />
   
         <label>Postcode</label>
         <input
           name='postcode'
           style={formInputStyle}
           onChange={handleInput}/>
   
         <label>Town/City</label>
         <input
           name='town'
           style={formInputStyle}
           onChange={handleInput} />
   
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