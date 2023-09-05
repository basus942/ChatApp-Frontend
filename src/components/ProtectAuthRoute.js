import { Navigate, useLocation } from "react-router-dom";
import { useUserData } from "../contexts/UserContext";
import React from "react";
import Logout from "./Logout";

const ProtectAuthRoute = () => {
  const userData = useUserData();
  const location = useLocation();
  const isLoggedin = userData.state.isLoggedin;
  const userDataResponse = userData.state.userData;

  return !isLoggedin || userDataResponse == null ? (
    <Logout />
  ) : (
    <Navigate to="/home" state={{ from: location }} replace />
  );
};

export default ProtectAuthRoute;
