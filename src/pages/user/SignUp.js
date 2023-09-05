import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import { userActions } from "../../reducers/UserActions";
import { useUserData } from "../../contexts/UserContext";

function SignUpForm() {
  const navigate = useNavigate();
  const userData = useUserData();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
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
    setLoading(true);

    const { username, email, password, image, name } = state;

    const RegisterandFetchUserdata = async () => {
      userActions.userRegister(
        {
          email: email,
          password: password,
          username: username,
          image: image,
          name: name,
        },
        userData.dispatch,
        (accessToken) => {
          userActions.fetchUserDetails(
            accessToken,
            userData.dispatch,
            () => {
              setLoading(false);
              navigate("/home");
            },
            (err) => {
              console.log("Error: ", err);
            }
          );
        },
        (err) => {
          console.log("Error: ", err);
        }
      );
    };
    RegisterandFetchUserdata();

    setState({
      username: "",
      email: "",
      password: "",
      name: "",
      image: "",
    });
  };

  return (
    <>
      {loading ? (
        <span className="loading loading-infinite loading-lg bg-black" />
      ) : (
        <form onSubmit={handleOnSubmit} className="formcard registerform  ">
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
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
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

          <Link to="/auth" className="text-xs font-medium mt-1">
            Already have an account?
          </Link>
          <button className="m-4">Register</button>
        </form>
      )}
    </>
  );
}

export default SignUpForm;
