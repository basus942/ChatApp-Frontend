import React, { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
function SignInForm() {
  const navigate = useNavigate();
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

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = state;

    await axios
      .post("https://chatapp-backend-1bpc.onrender.com/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        cookie.set("accessToken", res.data.accessToken);
        cookie.set("refreshToken", res.data.refreshToken);
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });

    for (const key in state) {
      setState({
        ...state,
        [key]: "",
      });
    }
  };

  return (
    <>
      <form className="formcard loginform" onSubmit={handleOnSubmit}>
        <h1 className="text-black text-lg md:text-2xl mb-4 ">User Login</h1>
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

          <Link to="/auth/register" className="text-xs font-medium mt-1">
            Don't have an account?Create now
          </Link>
          <button className="m-4 ">Login</button>
        </div>
      </form>
    </>
  );
}

export default SignInForm;
