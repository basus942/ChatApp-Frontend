import React from "react";
import LogoutButton from "../user/Logout";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiStore } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Navbar = ({ image, name }) => {
  const navigate = useNavigate();
  const navigateToStore = () => {
    navigate("/store");
  };
  return (
    <>
      <div className="flex justify-between bg-[#22AAA1] px-5 py-1 items-center">
        <div className="avatar group relative">
          <div className="w-10 m-1 rounded-full">
            <img src={image} alt="profilpic" />
            <div className="hidden group-hover:block absolute top-5 left-10 bg-gray-700 text-white p-2 rounded-md">
              {name}
            </div>
          </div>
        </div>

        <div className="flex justify- items-center">
          <BiStore
            size={25}
            onClick={navigateToStore}
            className="cursor-pointer"
          />
          <div className="dropdown dropdown-end ">
            <button className="btn btn-round btn-ghost  ">
              <BsThreeDotsVertical size={20} />
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
                      <button className="button ml-2">Cancel</button>
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
