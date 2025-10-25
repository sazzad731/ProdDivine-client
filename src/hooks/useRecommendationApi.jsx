import React, { useCallback } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useRecommendationApi = () => {
  const axiosSecure = useAxiosSecure();

  const addRecommendationPromise = async (recommendedData)=>{
    const res = await axiosSecure.post("/add-recommendation", recommendedData);
    return res.data;
  }

  const allRecommendationsPromise = useCallback(async (id)=>{
    const res = await axiosSecure.get(`/all-recommendations/${id}`);
    return res.data;
  }, [ axiosSecure ])
  

  const myRecommendationsPromise = useCallback(async (email)=>{
    const res = await axiosSecure.get(`/my-recommendations/${email}`);
    return res.data;
  }, [ axiosSecure ])
  
  const deleteRecommendationPromise = async (queyId, productId)=>{
    const res = await axiosSecure.delete(`/delete-recommendations?productId=${productId}&&queryId=${queyId}`);
    return res.data;
  }


  const recommendationsForMePromise = useCallback(async (email)=>{
    const res = await axiosSecure.get(`/recommendations-for-me?email=${email}`);
    return res.data;
  }, [axiosSecure])

  return {
    addRecommendationPromise,
    allRecommendationsPromise,
    myRecommendationsPromise,
    deleteRecommendationPromise,
    recommendationsForMePromise
  };
};

export default useRecommendationApi;