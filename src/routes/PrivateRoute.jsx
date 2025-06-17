import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import Spinner from "../components/Spinner/Spinner";

const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location)

  if(loading){
    return <Spinner/>
  }

  if(!user){
    return <Navigate state={location?.pathname} to="/login"/>
  }

  return children
};

export default PrivateRoute;