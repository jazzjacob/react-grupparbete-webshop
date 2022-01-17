const ShippingForm = () => {
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
    height: '30px',
    backgroundColor: 'gray',
    color: 'white'
  }

  return (
    <form style={formStyle}>
      <h3>Shipping address</h3>

      <label for='firstName'>First name</label>
      <input name='firstName' style={formInputStyle} />

      <label for='lastName'>Last name</label>
      <input name='lastName' style={formInputStyle} />

      <label for='phone'>Phone number</label>
      <input name='lastName' style={formInputStyle} />

      <label for='address'>Address</label>
      <input name='address' style={formInputStyle} />

      <label for='postcode'>Postcode</label>
      <input name='postcode' style={formInputStyle} />

      <label for='town'>Town/City</label>
      <input name='town' style={formInputStyle} />

      <button style={formButtonStyle}>Order</button>
    </form>
  );
}

export default ShippingForm;