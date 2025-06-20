import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useRecommendationApi = () => {
  const axiosSecure = useAxiosSecure();

  const addRecommendationPromise = (recommendedData)=>{
    return axiosSecure.post("/add-recommendation", recommendedData).then(res=>res.data)
  }

  return { addRecommendationPromise };
};

export default useRecommendationApi;