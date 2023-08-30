import React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LogoutButton = () => {
  const cookie = new Cookies();
  const refreshToken = cookie.get("refreshToken");
  const navigate = useNavigate();
  const logout = async () => {
    await axios
      .delete("https://chatapp-backend-1bpc.onrender.com/auth/logout", {
        headers: {
          Refreshtoken: refreshToken,
        },
      })
      .then((res) => {
        navigate("/auth");
        cookie.remove("refreshToken");
        cookie.remove("accessToken");
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  };
  return <button onClick={logout}>Logout</button>;
};

export default LogoutButton;
