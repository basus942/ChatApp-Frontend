const UserReducer = (state, action) => {
  switch (action.type) {
    case "UserLogin":
      return state;
    case "FetchUserDetails":
      return { ...state, userData: action.userData, isLoggedin: true };
    case "LogoutUser":
      return { ...state, userData: null, isLoggedin: false };
    default:
      return state;
  }
};

export default UserReducer;
