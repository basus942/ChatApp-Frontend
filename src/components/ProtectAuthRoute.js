import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserData } from "../contexts/UserContext";
import React from "react";

const ProtectAuthRoute = () => {
  const userData = useUserData();

  const location = useLocation();
  console.log("App Rendered. userData:", userData);
  return userData ? (
    <Outlet />
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};

export default ProtectAuthRoute;
