import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../../config/api";
import Cookies from "universal-cookie";

const AdminLoginPage = () => {
  const [error, setError] = useState(false);
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

    await API.post("/admin/login", { email: email, password: password })
      .then((res) => {
        cookie.set("adminAccessToken", res.data.adminAccessToken);
        cookie.set("adminRefreshToken", res.data.adminRefreshToken);

        navigate("/admin");
      })
      .catch((err) => {
        setError(err.response.data.error.message);
        console.log("Error: ", err.response.data.error.message);
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
      <h4 className="text-sm text-red-700 font-semibold pb-1">
        {error ? error : null}
      </h4>
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
        <button className="m-4 button">Login</button>
      </div>
    </form>
  );
};

export default AdminLoginPage;
