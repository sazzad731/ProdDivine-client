import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {auth} from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {
  const [ user, setUser ] = useState();
  const [ loading, setLoading ] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  console.log(user);

  const createOrLoginGoogle = ()=>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const createUserEmailPassword = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOutUser = ()=>{
    return signOut(auth)
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe;
  }, [])

  const userInfo = {
    auth,
    user,
    loading,
    createOrLoginGoogle,
    createUserEmailPassword,
    logInUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={userInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;