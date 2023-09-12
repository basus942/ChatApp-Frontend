import React from "react";
import { useNavigate } from "react-router-dom";

const Missing = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/home");
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-8xl text-black font-extrabold">404</div>
      <h1 className="text-2xl text-black font-extrabold p-2">
        Oops,Page not found
      </h1>
      <button className="p-3 m-3 button" onClick={navigateToHome}>
        Home
      </button>
    </div>
  );
};

export default Missing;
