import React from "react";
import Navbar from "./Navbar";

import ChatSection from "./ChatSection";
import ConversationList from "./ConversationList";

const UserDashboard = () => {
  return (
    <div className="flex  rounded-2xl shadow-md divide-x divide-[#7C7C7C] overflow-hidden ">
      <div className="w-[17rem] h-[35rem] bg-[#040D12] text-white  ">
        <Navbar /> <ConversationList />
        <ConversationList />
        <ConversationList />
      </div>
      <div className="w-[35rem] h-[35rem] bg-[#136F63] text-white">
        <ChatSection />
      </div>
    </div>
  );
};

export default UserDashboard;
