import { UserContext } from '../../context/UserContext';
import { useContext } from 'react';

const LoginForm = () => {

  const { setLoggedIn, setSkippedLogin } = useContext(UserContext);

  const skipLoginButtonStyle = {
    height: '30px',
    backgroundColor: 'black',
    color: 'white',
    marginTop: '5px'
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px'
  }

  const formInputStyle = {
    marginBottom: '20px',
    height: '24px'
  }

  const loginButtonStyle = {
    height: '40px',
    backgroundColor: 'gray',
    color: 'white'
  }

  const logIn = () => {
    alert('You are logged in');
    setLoggedIn(true);
  }

  const skipLogin = () => {
    alert('You will order without logging in');
    setSkippedLogin(true);
  }

  return (
    <>
      <h3>Här nånstans borde varukorg synas</h3>
      <form style={formStyle} onSubmit={logIn}>
        <p>This is the login form</p>
        <label>Email</label>
        <input name='email' style={formInputStyle} required />
        <label>Password</label>
        <input name='password' style={formInputStyle} type='password' required />
        <button
          style={loginButtonStyle}
          type='submit'
        >
          Log In
        </button>
        <button
          style={skipLoginButtonStyle}
          onClick={skipLogin}
        >
          Checkout without login
        </button>
      </form>
    </>
  );
}; 

export default LoginForm;