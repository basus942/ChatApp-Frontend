import React from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";

const AdminLogoutButton = () => {
  const cookie = new Cookies();
  const refreshToken = cookie.get("adminRefreshToken");

  const navigate = useNavigate();
  const logout = async () => {
    await API({
      url: "/admin/logout",
      method: "delete",
      headers: {
        Refreshtoken: refreshToken,
      },
    })
      .then(async (res) => {
        console.log(res);
        cookie.remove("adminRefreshToken");
        cookie.remove("adminAccessToken");
        navigate("/admin/login");
      })
      .catch((err) => {
        console.log(err.response.status);
      });
  };

  return <button onClick={logout}>Logout</button>;
};

export default AdminLogoutButton;
