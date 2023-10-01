import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  console.log(token,'token from storage')
  return (false) ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;