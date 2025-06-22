import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
import Swal from 'sweetalert2';

const axiosInstance = axios.create({
  baseURL: "https://prod-divine-server.vercel.app",
});

const useAxiosSecure = () => {
  const { user, logOutUser } = useAuth();

  axiosInstance.interceptors.request.use(config=>{
    config.headers.authorization = `Bearer ${user?.accessToken}`;
    return config;
  },
    error => Promise.reject(error)
  )


  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if(error.status === 401){
        logOutUser().then(()=>{
          Swal.fire({
            title: 'Sign out user for 401 status code',
            icon: "error",
            showConfirmButton: false,
            timer: 2000
          })
        }).catch((err)=>{
          Swal.fire({
            title: err.message,
            icon: "error"
          })
        })
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;