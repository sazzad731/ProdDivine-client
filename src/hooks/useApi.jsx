import { useCallback } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useApi = () => {
  const axiosSecure = useAxiosSecure();

  const recentQueryPromise = async ()=>{
    const res = await axiosSecure.get("/recent-query");
    return res.data;
  }

  const allQueriesPromise = useCallback(async (name, sort)=>{
    const res = await axiosSecure.get(`/queries?search=${name}&&sort=${sort}`);
    return res.data;
  }, [ axiosSecure ])
  

  const queryDetailsPromise = useCallback(async (id)=>{
    const res = await axiosSecure.get(`/query-details/${id}`);
    return res.data;
  }, [axiosSecure])


  const addQueryPromise = async (data)=>{
    const res = await axiosSecure.post("/add-query", data);
    return res.data;
  }


  const myQueriesPromise = useCallback(async (email)=>{
    const res = await axiosSecure.get(`/my-queries?email=${email}`);
    return res.data;
  }, [ axiosSecure ])



  const updateQueryPromise = async (id, data)=>{
    const res = await axiosSecure.patch(`/update-query/${id}`, data);
    return res.data;
  }

  

  const deleteQueryPromise = async (id)=>{
    const res = await axiosSecure.delete(`/delete-query/${id}`);
    return res.data;
  }

  return {
    recentQueryPromise,
    allQueriesPromise,
    queryDetailsPromise,
    addQueryPromise,
    myQueriesPromise,
    updateQueryPromise,
    deleteQueryPromise,
  };
};

export default useApi;