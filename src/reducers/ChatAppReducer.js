const ChatAppReducer = (state, dispatch) => {
  switch (dispatch.type) {
    case "currentChat":
      return { ...state, friendData: dispatch.currentChat };
    default:
      return state;
  }
};

export default ChatAppReducer;
