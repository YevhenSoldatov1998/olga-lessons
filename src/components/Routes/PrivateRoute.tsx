import {PropsWithChildren} from 'react';
import {useUserContext} from "shared/providers/UserProvider";
import {Navigate, redirect} from "react-router-dom";

const PrivateRoute = ({children}: PropsWithChildren) => {
  const {isAuth} = useUserContext()
  if (!isAuth) {
    return <Navigate to='/sign-in'/>
  }
  return <>{children}</>
};

export default PrivateRoute;