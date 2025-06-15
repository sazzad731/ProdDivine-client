import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const instance = axios.create({
  baseURL: "http://localhos:5000" 
})

const useAxiosSecure = () => {
  const { user } = useAuth();

  instance.interceptors.request.use(config=>{
    config.headers.authorization = `Bearer ${user?.accessToken}`;
    return config;
  })

  return (
    <div>
      
    </div>
  );
};

export default useAxiosSecure;