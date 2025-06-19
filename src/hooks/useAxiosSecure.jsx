import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000" 
})

const useAxiosSecure = () => {
  const { user } = useAuth();

  axiosInstance.interceptors.request.use(config=>{
    config.headers.authorization = `Bearer ${user?.accessToken}`;
    return config;
  },
    error => Promise.reject(error)
  )


  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // Global error handling
      if (error.response?.status === 401) {
        // Redirect or notify
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;