import React from "react";
import Navbar from "./Navbar";

const UserDashboard = () => {
  return (
    <div className="flex  rounded-2xl shadow-md overflow-hidden">
      <div className="w-[35rem] h-[35rem] bg-[#800020] text-white ">
        <Navbar /> UserList
      </div>
      <div className="w-[35rem] h-[35rem] bg-[#D70040] text-white">
        ChatArea
      </div>
    </div>
  );
};

export default UserDashboard;
