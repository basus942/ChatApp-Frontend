import React, { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

import UserDashboard from "../../components/chatApp/UserDashboard";

const HomePage = () => {
  const cookie = new Cookies();
  const accessToken = cookie.get("accessToken");
  const navigate = useNavigate();
  useEffect(() => {
    const verify = async () =>
      await axios
        .get("http://localhost:8080/home", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    verify();
  }, [accessToken, navigate]);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <UserDashboard />
        </div>
      </div>
    </>
  );
};

export default HomePage;
