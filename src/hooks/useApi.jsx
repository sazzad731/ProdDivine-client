import { useCallback } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useApi = () => {
  const axiosSecure = useAxiosSecure();

  const addQueryPromise = (data)=>{
    return axiosSecure.post("/add-query", data).then((res) => res.data);
  }


  const myQueriesPromise = useCallback((email)=>{
    return axiosSecure.get(`/my-queries?email=${email}`).then(res => res.data);
  }, [ axiosSecure ])
  

  const deleteQueryPromise = (id)=>{
    return axiosSecure.delete(`/delete-query/${id}`).then(res => res.data);
  }

  return { addQueryPromise, myQueriesPromise, deleteQueryPromise };
};

export default useApi;