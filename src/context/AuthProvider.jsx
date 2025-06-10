import React, { useState } from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState();
  const userInfo = {
    user
  }
  return (
    <AuthContext.Provider value={userInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;