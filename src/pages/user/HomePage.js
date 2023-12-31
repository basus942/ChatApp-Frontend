import React, { useEffect } from "react";
import { API } from "../../config/api";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

import UserDashboard from "../../components/chatApp/UserDashboard";
import { useUserData } from "../../contexts/UserContext";
import { ChatAppContextProvider } from "../../contexts/ChatAppContext";

const HomePage = () => {
  const cookie = new Cookies();
  const accessToken = cookie.get("accessToken");
  const navigate = useNavigate();
  const userData = useUserData();
  useEffect(() => {
    const verify = async () =>
      await API({
        url: "/home",
        method: "get",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then((res) => {
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
          navigate("/");
        });
    verify();
  }, [accessToken, navigate]);

  return (
    <>
      <ChatAppContextProvider>
        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center">
            {userData.state.userData != null && <UserDashboard />}
          </div>
        </div>
      </ChatAppContextProvider>
    </>
  );
};

export default HomePage;
