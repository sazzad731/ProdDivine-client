import React, { useCallback } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useRecommendationApi = () => {
  const axiosSecure = useAxiosSecure();

  const addRecommendationPromise = (recommendedData)=>{
    return axiosSecure.post("/add-recommendation", recommendedData).then(res=>res.data)
  }

  const allRecommendationsPromise = useCallback((id)=>{
    return axiosSecure.get(`/all-recommendations/${id}`).then(res => res.data);
  }, [axiosSecure])

  return { addRecommendationPromise, allRecommendationsPromise };
};

export default useRecommendationApi;