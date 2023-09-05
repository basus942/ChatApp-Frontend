import React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../contexts/UserContext";
import { userActions } from "../../reducers/UserActions";
const LogoutButton = () => {
  const userData = useUserData();
  const cookie = new Cookies();
  const refreshToken = cookie.get("refreshToken");

  const navigate = useNavigate();
  const logout = async () => {
    userActions.logoutUser(
      refreshToken,
      userData.dispatch,
      (res) => {
        cookie.remove("refreshToken");
        cookie.remove("accessToken");
        console.log("logout success");
        navigate("/");
      },
      (err) => {
        console.log("error in logout:", err);
      }
    );
  };
  return (
    <button className="bg-transparent" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
