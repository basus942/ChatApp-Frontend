import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useUserData } from "../contexts/UserContext";
import React from "react";

const ProtectAuthRoute = () => {
  const userData = useUserData();
  const location = useLocation();
  const isLoggedin = userData.state.isLoggedin;
  return !isLoggedin ? (
    <Outlet />
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};

export default ProtectAuthRoute;
