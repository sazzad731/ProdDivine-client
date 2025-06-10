import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import {auth} from "../firebase/firebase.config"
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState();
  const [ loading, setLoading ] = useState(true);

  const createUserEmailPassword = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userInfo = {
    user,
    loading,
    createUserEmailPassword,
  };
  return (
    <AuthContext.Provider value={userInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;