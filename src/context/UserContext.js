import { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) => {
  
  const [loggedIn, setLoggedIn] = useState(false);
  const [skippedLogin, setSkippedLogin] = useState(false);


  return (
    <>
      <UserContext.Provider value={{ loggedIn, setLoggedIn, skippedLogin, setSkippedLogin }}>
        {children}
      </UserContext.Provider>
    </>
  )
};

export default UserProvider;