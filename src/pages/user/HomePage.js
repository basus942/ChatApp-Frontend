import React, { useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../../components/user/Logout";

const HomePage = () => {
  const cookie = new Cookies();
  const accessToken = cookie.get("accessToken");

  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () =>
      await axios
        .get("https://chatapp-backend-1bpc.onrender.com/", {
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
      <img
        alt="welcomeback"
        src="https://media0.giphy.com/media/iEPGAonPAQ63xIkyIZ/giphy.gif?cid=ecf05e471g074ndnq7m2m91y36pkff4nizmefdmdnsnaohw7&ep=v1_gifs_search&rid=giphy.gif&ct=g"
      ></img>
      <LogoutButton />
    </>
  );
};

export default HomePage;
