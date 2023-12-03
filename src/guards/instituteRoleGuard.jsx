import React from "react";
import { Navigate } from "react-router-dom";

const INSTITUTE_ROLE = "institute";

function StudentRoleGuard({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;

  if (role !== INSTITUTE_ROLE) {
    return <Navigate to="/instituteDash" />;
  }
  return children;
}

export default StudentRoleGuard;
