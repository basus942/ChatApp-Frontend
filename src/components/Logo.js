import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };
  return (
    <div
      onClick={navigateToHome}
      className="text-xl text-slate-800 bg-slate-200 w-max font-bold p-2 m-2 rounded-xl cursor-grab "
    >
      ChatAPP 1.0
    </div>
  );
};

export default Logo;
