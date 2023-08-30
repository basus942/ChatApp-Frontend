import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import AllUserTable from "../../components/admin/AllUserTable";
import AdminLogoutButton from "../../components/admin/AdminLogoutButton";
const Admin = () => {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const accessToken = cookie.get("adminAccessToken");

  useEffect(() => {
    const verify = async () =>
      await axios
        .get(
          "https://chatapp-backend-1bpc.onrender.com/admin",

          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/admin/login");
        });
    verify();
  }, [accessToken, navigate]);

  return (
    <div className="flex items-center">
      <AllUserTable />
      <AdminLogoutButton />
    </div>
  );
};

export default Admin;
