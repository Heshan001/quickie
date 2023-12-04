import React from "react";
import { Navigate } from "react-router-dom";

const STUDENT_ROLE = "student";

function StudentRoleGuard({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;

  if (role !== STUDENT_ROLE) {
    return <Navigate to="Login" />;
  }
  return children;
}

export default StudentRoleGuard;
