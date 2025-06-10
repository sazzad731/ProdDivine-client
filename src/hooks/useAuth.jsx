import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const { user, createUserEmailPassword, loading } = use(AuthContext);
  
  return { user, createUserEmailPassword, loading };
};

export default useAuth;