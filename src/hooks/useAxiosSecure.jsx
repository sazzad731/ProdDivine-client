import axios from 'axios';
import React from 'react';
import useAuth from './useAuth';
import Swal from 'sweetalert2';

const axiosInstance = axios.create({
  baseURL: "https://prod-divine-server.vercel.app",
  // baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  const { logOutUser, auth } = useAuth();

  axiosInstance.interceptors.request.use(
    async (config) => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        const token = await currentUser.getIdToken(); // ✅ The real Firebase ID token
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );


  axiosInstance.interceptors.response.use((response) => {
    return response;
  },
    (error) => {
      console.log(error)
      if(error.response?.status === 401){
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