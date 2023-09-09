import React from "react";
import LogoutButton from "../user/Logout";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-[#22AAA1] px-10 py-1 ">
        <div className="avatar">
          <div className="w-10 m-1 rounded-full">
            <img
              src="https://i.pinimg.com/564x/c9/8a/07/c98a0779b955a3ca6ba68d5c5166619e.jpg"
              alt="profilpic"
            />
          </div>
        </div>

        <div className="flex justify- items-center">
          <div className="dropdown dropdown-end ">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                ></path>
              </svg>
            </button>
            <div className="flex items-center menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-100 rounded-box w-[8rem]">
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
