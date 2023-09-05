import React, { createContext, useContext, useReducer } from "react";
import UserReducer from "../reducers/UserReducer";

// step 1:create a context
// step2: wrap the provide the context with value
// step3: useContext the context you have created

const UserDataContext = createContext();
const useUserData = () => {
  return useContext(UserDataContext);
};

const UserDataProvider = ({ children }) => {
  const intialState = {
    userData: null,
    isLoggedin: false,
  };
  const [state, dispatch] = useReducer(UserReducer, intialState);
  console.log(state);
  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};

export { UserDataProvider, useUserData };
