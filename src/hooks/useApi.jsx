import { useCallback } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useApi = () => {
  const axiosSecure = useAxiosSecure();

  const recentQueryPromise = ()=>{
    return axiosSecure.get("recent-query").then(res => res.data);
  }

  const addQueryPromise = (data)=>{
    return axiosSecure.post("/add-query", data).then((res) => res.data);
  }


  const myQueriesPromise = useCallback((email)=>{
    return axiosSecure.get(`/my-queries?email=${email}`).then(res => res.data);
  }, [ axiosSecure ])



  const updateQueryPromise = (id, data)=>{
    return axiosSecure.patch(`/update-query/${id}`, data).then(res => res.data);
  }

  

  const deleteQueryPromise = (id)=>{
    return axiosSecure.delete(`/delete-query/${id}`).then(res => res.data);
  }

  return {
    recentQueryPromise,
    addQueryPromise,
    myQueriesPromise,
    updateQueryPromise,
    deleteQueryPromise,
  };
};

export default useApi;