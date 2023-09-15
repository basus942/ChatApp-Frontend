import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "./Logo";

const Layout = () => {
  return (
    <>
      <div className="mb-[5rem] md:mb-[0rem]">
        <div className="flex fixed left-5 top-2 justify-between items-center bg-transparent  w-screen z-20  ">
          <Logo />
        </div>
      </div>
      <Outlet className="mt-5" />
    </>
  );
};

export default Layout;
