import { useCallback } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useApi = () => {
  const axiosSecure = useAxiosSecure();

  const recentQueryPromise = ()=>{
    return axiosSecure.get("/recent-query").then(res => res.data);
  }

  const allQueriesPromise = useCallback((name, sort)=>{
    return axiosSecure.get(`/queries?search=${name}&&sort=${sort}`).then(res => res.data);
  }, [ axiosSecure ])
  

  const queryDetailsPromise = useCallback((id)=>{
    return axiosSecure.get(`/query-details/${id}`).then(res => res.data);
  }, [axiosSecure])


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
    allQueriesPromise,
    queryDetailsPromise,
    addQueryPromise,
    myQueriesPromise,
    updateQueryPromise,
    deleteQueryPromise,
  };
};

export default useApi;