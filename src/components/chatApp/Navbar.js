import React from "react";
import LogoutButton from "../user/Logout";

const Navbar = ({ image, name }) => {
  return (
    <>
      <div className="flex justify-between bg-[#22AAA1] px-10 py-1 ">
        <div className="avatar group relative">
          <div className="w-10 m-1 rounded-full">
            <img src={image} alt="profilpic" />
            <div className="hidden group-hover:block absolute top-5 left-10 bg-gray-700 text-white p-2 rounded-md">
              {name}
            </div>
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
            <div className="flex items-center menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-gray-700 rounded-box w-[8rem]">
              <button
                className="bg-transparent"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Logout
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    <h1 className="mb-2">Are you sure you want to logout?</h1>
                    <div className="flex justify-start items-center ">
                      <LogoutButton />
                      <button className="button">Cancel</button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
