import React, { useEffect, useState } from "react";

import ChatSection from "./ChatSection";

import { useUserData } from "../../contexts/UserContext";
import { API } from "../../config/api";
import { io } from "socket.io-client";

import ChatAppSideBar from "./ChatAppSideBar";

const UserDashboard = () => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [message, setMessage] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const userData = useUserData();
  const userId = userData.state.userData["_id"];

  useEffect(() => {
    setSocket(io("ws://localhost:8090"), {
      reconnection: true,
      reconnectionAttempts: Infinity, // Infinite reconnection attempts
    });
  }, []);

  useEffect(() => {
    socket?.on("getMessage", (data) => {
      console.log("socketmessage", data);
      setArrivalMessage({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, [socket]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.senderId) &&
      setMessage((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  const receiverId = currentChat?.members.find((id) => id !== userId);

  useEffect(() => {
    socket?.emit("addUser", userId);
    socket?.on("getUser", (users) => setOnlineUsers(users));
  }, [socket, userId]);

  useEffect(() => {
    const getConversations = async () => {
      const res = await API.get(`/conversations/${userId}`);
      setConversations(res.data);
    };
    getConversations();
  }, [userId]);

  useEffect(() => {
    try {
      const getMessages = async () => {
        const res = await API.get(`/messages/${currentChat?._id}`);
        setMessage(res.data);
      };
      getMessages();
    } catch (error) {
      console.log(error);
    }
  }, [currentChat]);

  return (
    <div className="flex  rounded-2xl shadow-md divide-x divide-[#7C7C7C] overflow-hidden ">
      <div className="w-[17rem] h-[35rem] relative bg-[#040D12] text-white  ">
        <ChatAppSideBar
          onlineUsers={onlineUsers}
          conversations={conversations}
          setCurrentChat={setCurrentChat}
          userId={userId}
        />
      </div>
      <div className="w-[35rem] h-[35rem] bg-[#136F63] text-white">
        {currentChat ? (
          <ChatSection
            socket={socket}
            messages={message}
            currentUserId={userId}
            setMessage={setMessage}
            currentChatid={currentChat?._id}
            receiverId={receiverId}
          />
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
