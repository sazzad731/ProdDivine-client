import React, { useCallback } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useRecommendationApi = () => {
  const axiosSecure = useAxiosSecure();

  const addRecommendationPromise = (recommendedData)=>{
    return axiosSecure.post("/add-recommendation", recommendedData).then(res=>res.data)
  }

  const allRecommendationsPromise = useCallback((id)=>{
    return axiosSecure.get(`/all-recommendations/${id}`).then(res => res.data);
  }, [ axiosSecure ])
  

  const myRecommendationsPromise = useCallback((email)=>{
    return axiosSecure.get(`/my-recommendations/${email}`).then(res => res.data);
  }, [ axiosSecure ])
  
  const deleteRecommendationPromise = (queyId, productId)=>{
    return axiosSecure.delete(`/delete-recommendations?productId=${productId}&&queryId=${queyId}`).then(res => res.data);
  }

  return {
    addRecommendationPromise,
    allRecommendationsPromise,
    myRecommendationsPromise,
    deleteRecommendationPromise,
  };
};

export default useRecommendationApi;