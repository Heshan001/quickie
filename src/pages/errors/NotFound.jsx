import React from "react";
import { Navigate } from "react-router-dom/dist";

function NotFound() {
  return <Navigate to="/" />;
}

export default NotFound;
