import useAxiosSecure from '../hooks/useAxiosSecure';
const useApi = () => {
  const axiosSecure = useAxiosSecure();

  const addQueryApi = (data)=>{
    return axiosSecure.post("/add-query", data).then((res) => res.data);
  }

  return { addQueryApi };
};

export default useApi;