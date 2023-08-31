import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

// step 1:create a context
// step2: wrap the provide the context with value
// step3: useContext the context you have created

const cookie = new Cookies();
const accessToken = cookie.get("accessToken");

const UserDataContext = createContext();
const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("https://chatapp-backend-1bpc.onrender.com/user/profile", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log("User Data Fetched:", res.data.userData);
        setUserData(res.data.userData);
      })
      .catch((err) => {
        console.log("Error Fetching User Data:", err);
      });
  }, []);
  // console.log("UserDataProvider Rendered. userData:", userData);

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

const useUserData = () => {
  return useContext(UserDataContext);
};

export { UserDataProvider, useUserData };
