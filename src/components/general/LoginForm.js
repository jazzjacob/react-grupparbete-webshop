import { UserContext } from '../../context/UserContext';
import { useContext, useState } from 'react';
import userInfoService from '../../services/userInfoService';

const LoginForm = () => {

  const { setLoggedIn, setSkippedLogin } = useContext(UserContext);
  
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

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
    if (emailInput === userInfoService.email) {
      alert('Good job! You are now logged in.');      
      setLoggedIn(true);
    } else {
      alert('WRONG EMAIL!!! TRY AGAIN!!!');
    }
  }

  const skipLogin = () => {
    alert('You will order without logging in');
    setSkippedLogin(true);
  }
  
  const handleInput = (e) => {
    if (e.target.name === 'email') {
      setEmailInput(e.target.value);
    } else if (e.target.name === 'password') {
      setPasswordInput(e.target.value);
    }
  }

  console.log(emailInput);
  console.log(passwordInput);
  return (
    <>
      <form style={formStyle} onSubmit={logIn}>
        <p>This is the login form</p>
        <label>Email</label>
        <input
          name='email'
          style={formInputStyle}
          onChange={handleInput}
          required
        />
        <label>Password</label>
        <input
          name='password'
          style={formInputStyle}
          type='password'
          onChange={handleInput}
          required
        />
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