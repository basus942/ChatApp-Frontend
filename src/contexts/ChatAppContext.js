import { createContext, useContext, useReducer } from "react";
import ChatAppReducer from "../reducers/ChatAppReducer";

const ChatAppContext = createContext();

const useChatAppData = () => {
  return useContext(ChatAppContext);
};

const ChatAppContextProvider = ({ children }) => {
  const initialState = {
    friendData: null,
  };

  const [state, dispatch] = useReducer(ChatAppReducer, initialState);

  return (
    <ChatAppContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatAppContext.Provider>
  );
};

export { useChatAppData, ChatAppContextProvider };
