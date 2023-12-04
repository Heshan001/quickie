import React from "react";
import { Navigate } from "react-router-dom";


function AuthGuard({ children }) {
  // todo: check user is Authenticated
  const user = JSON.parse(localStorage.getItem("user"));


  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default AuthGuard;
