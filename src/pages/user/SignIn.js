import React, { useState } from "react";
import { useUserData } from "../../contexts/UserContext";
import { userActions } from "../../reducers/UserActions";
import { useNavigate, Link } from "react-router-dom";
function SignInForm() {
  const userData = useUserData();
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = state;

    const LoginandFetchUserdata = async () => {
      userActions.userLogin(
        { email: email, password: password },
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
          setLoading(false);
          setError(err.response.data.error.message);
          console.log("Error: ", err.response.data.error.message);
        }
      );
    };
    LoginandFetchUserdata();
    const newState = {};
    for (const key in state) {
      newState[key] = "";
    }
    setState(newState);
  };

  return (
    <>
      {loading ? (
        <span className="loading loading-infinite loading-lg bg-black" />
      ) : (
        <form className="formcard loginform" onSubmit={handleOnSubmit}>
          <h1 className="text-black text-lg md:text-2xl mb-4 ">User Login</h1>
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

            <Link to="/auth/register" className="text-xs font-medium mt-1">
              Don't have an account?Create now
            </Link>
            <button className="m-4 button ">Login</button>
          </div>
        </form>
      )}
    </>
  );
}

export default SignInForm;
