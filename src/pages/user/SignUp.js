import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate, Link } from "react-router-dom";

function SignUpForm() {
  const navigate = useNavigate();
  const cookie = new Cookies();
  const [state, setState] = React.useState({
    username: "",
    email: "",
    password: "",
    name: "",
    image: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const { username, email, password, image, name } = state;
    try {
      await axios
        .post("https://chatapp-backend-1bpc.onrender.com/auth/register", {
          email: email,
          username: username,
          password: password,
          image: image,
          name: name,
        })
        .then((res) => {
          cookie.set("accessToken", res.data.accessToken);
          cookie.set("refreshToken", res.data.refreshToken);
          console.log(res);
        })
        .then(() => navigate("/"))
        .catch((err) => console.log(err));
    } catch (error) {
      console.log(error.response.data.error.message);
    }

    setState({
      username: "",
      email: "",
      password: "",
      name: "",
      image: "",
    });
  };

  return (
    <div className="md:flex justify-center items-center">
      <form
        onSubmit={handleOnSubmit}
        className="formcard w-[26rem] h-[25.5rem]"
      >
        <h1 className="text-black p-4">Register Now</h1>

        <input
          type="text"
          value={state.email}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          className="forminput"
        />

        <input
          type="text"
          value={state.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
          className="forminput"
        />

        <input
          type="text"
          placeholder="Username"
          name="username"
          value={state.username}
          onChange={handleChange}
          className="forminput"
        />

        <input
          type="text"
          placeholder="Image"
          name="image"
          value={state.image}
          onChange={handleChange}
          className="forminput"
        />

        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Password"
          className="forminput"
        />
        <Link to="/auth" className="text-xs font-medium mt-1">
          Already have an account?
        </Link>
        <button className="m-4">Register</button>
      </form>
      {/* <img
        src="https://shorturl.at/HKL59"
        alt=""
        className="bg-contain w-[18rem] h-[25.5rem] rounded-xl"
      /> */}
    </div>
  );
}

export default SignUpForm;
