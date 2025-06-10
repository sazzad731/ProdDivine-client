import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const { user } = use(AuthContext);
  
  return {user}
};

export default useAuth;