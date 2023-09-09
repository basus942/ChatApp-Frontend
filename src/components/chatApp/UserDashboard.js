import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

import ChatSection from "./ChatSection";
import ConversationList from "./ConversationList";
import { useUserData } from "../../contexts/UserContext";
import { API } from "../../config/api";

const UserDashboard = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [message, setMessage] = useState(null);
  const userData = useUserData();
  const userId = userData.state.userData["_id"];

  useEffect(() => {
    const getConversations = async () => {
      const res = await API.get(`/conversations/${userId}`);
      setConversations(res.data);
    };
    getConversations();
  }, [userData]);

  useEffect(() => {
    try {
      const getMessages = async () => {
        const res = await API.get(`/messages/${currentChat?._id}`);
        setMessage(res.data);
        console.log(res.data);
      };
      getMessages();
    } catch (error) {
      console.log(error);
    }
  }, [currentChat]);

  return (
    <div className="flex  rounded-2xl shadow-md divide-x divide-[#7C7C7C] overflow-hidden ">
      <div className="w-[17rem] h-[35rem] bg-[#040D12] text-white  ">
        <Navbar image={userData.state.userData.image} />
        <div className="h-full overflow-auto m-1">
          {conversations.map((convo) => (
            <div onClick={() => setCurrentChat(convo)}>
              <ConversationList
                conversation={convo}
                key={convo._id}
                currentUserId={userId}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[35rem] h-[35rem] bg-[#136F63] text-white">
        {currentChat ? (
          <ChatSection messages={message} currentUserId={userId} />
        ) : (
          <span className="flex justify-center items-center mt-[14rem] text-xl">
            Open a Conversation
          </span>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
