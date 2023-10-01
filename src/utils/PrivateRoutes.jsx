import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  console.log(token,'token from storage')
  return (token) ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;