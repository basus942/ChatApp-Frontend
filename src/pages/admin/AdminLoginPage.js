import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const AdminLoginPage = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };
  const cookie = new Cookies();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = state;

    await axios
      .post("https://chatapp-backend-1bpc.onrender.com/admin/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        cookie.set("adminAccessToken", res.data.adminAccessToken);
        cookie.set("adminRefreshToken", res.data.adminRefreshToken);

        navigate("/admin");
      })
      .catch((error) => {
        console.log(error);
      });

    setState({
      email: "",
      password: "",
    });
  };

  return (
    <form className="formcard loginform" onSubmit={handleSubmit}>
      <h1 className="text-black text-lg md:text-2xl mb-4 ">Admin Login</h1>
      <div className="    flex flex-col text-xs md:text-sm ">
        <input
          type="text"
          className="forminput"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
        ></input>

        <input
          type="password"
          className="forminput"
          placeholder="Password"
          name="password"
          value={state.password}
          onChange={handleChange}
        ></input>
        <button className="m-4 ">Login</button>
      </div>
    </form>
  );
};

export default AdminLoginPage;
