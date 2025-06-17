import { useCallback } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useApi = () => {
  const axiosSecure = useAxiosSecure();

  const addQueryPromise = useCallback((data)=>{
    return axiosSecure.post("/add-query", data).then((res) => res.data);
  }, [axiosSecure])


  const MyQueriesPromise = useCallback((email)=>{
    return axiosSecure.get(`/my-queries?email=${email}`).then(res => res.data);
  }, [axiosSecure])

  return { addQueryPromise, MyQueriesPromise };
};

export default useApi;