import Cookies from "universal-cookie";
import { API } from "../config/api";
const cookie = new Cookies();

export const userActions = {
  userRegister: (payload, dispatch, onSucess, onError) => {
    API.post("/auth/register", { ...payload })
      .then((RegisterResponse) => {
        // Extract the access token from the login response
        const accessToken = RegisterResponse.data.accessToken;
        // Set cookies and navigate to "/home"
        cookie.set("accessToken", accessToken);
        cookie.set("refreshToken", RegisterResponse.data.refreshToken);
        dispatch({
          type: "UserLogin",
        });
        onSucess(accessToken);
      })
      .catch((err) => {
        onError(err);
      });
  },

  userLogin: (payload, dispatch, onSucess, onError) => {
    API.post("/auth/login", { ...payload })
      .then((loginResponse) => {
        // Extract the access token from the login response
        const accessToken = loginResponse.data.accessToken;
        // Set cookies and navigate to "/home"
        cookie.set("accessToken", accessToken);
        cookie.set("refreshToken", loginResponse.data.refreshToken);
        dispatch({
          type: "UserLogin",
        });
        onSucess(accessToken);
      })
      .catch((err) => {
        onError(err);
      });
  },
  fetchUserDetails: (accessToken, dispatch, onSucess, onError) => {
    API({
      url: "/user/profile",
      method: "get",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((profileResponse) => {
        const userDataResponse = profileResponse.data.userData;
        dispatch({
          type: "FetchUserDetails",
          userData: userDataResponse,
        });
        onSucess();
      })
      .catch((err) => {
        onError(err);
      });
  },
  logoutUser: (refreshToken, dispatch, onSucess, onError) => {
    API({
      url: "/auth/logout",
      method: "delete",
      headers: {
        Refreshtoken: refreshToken,
      },
    })
      .then((logoutRes) => {
        dispatch({ type: "LogoutUser" });
        onSucess(logoutRes);
      })
      .catch((err) => {
        onError(err);
      });
  },
};
