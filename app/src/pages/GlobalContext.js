import React, { createContext, useState } from 'react';

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [user,setUser] = useState({fullName:null,username:null,img:null})
  const [token,setToken] = useState()
  const value = {
    user,
    setUser,
    token,
    setToken
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};
