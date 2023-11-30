import React from "react";
import { Navigate } from "react-router-dom";

const ADMIN_ROLE = "admin";
const INSTITUTE_ROLE = "institute";

function AuthGuard({ children }) {
  // todo: check user is Authenticated
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;

  if (user) {
    /*

    if (role === INSTITUTE_ROLE) {
      return <Navigate to="/instituteDash" />;
    }
    else {
    }
    */

    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default AuthGuard;
