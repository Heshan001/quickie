import React from "react";
import { Navigate } from "react-router-dom";

const ADMIN_ROLE = "admin";
const INSTITUTE_ROLE = "institute";

function AdminRoleGuard({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user.role;

  if (role !== ADMIN_ROLE) {
    return <Navigate to="/" />;
  }
  return children;
}

export default AdminRoleGuard;
