import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthLogin } from "../PrivateRoutes/ProtectedRoutes";


export default function Private({ children }) {
  const { state } = useContext(AuthLogin);
  if (!state.isAuth) {
    return <Navigate to={"/"} />;
  }
  return children;
}