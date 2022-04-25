import { useContext } from "react";

import { AuthContext } from "./context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  console.log(children);
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace={false} />;
  }
  return children;
};
