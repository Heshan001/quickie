import React from "react";
import { Navigate } from "react-router-dom/dist";
function AuthGuard({ children }) {
  // todo: check user is Aenticated
  const user = localStorage.getItem("user");
  
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default AuthGuard;
