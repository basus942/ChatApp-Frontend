import React, { useEffect, useState } from "react";
import { API } from "../../config/api";

const ChatOnline = ({ onlineUsers, currentUserId, setCurrentChat }) => {
  const [onlineFriends, setOnlineFriends] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchOnlineFriendsData = async () => {
      try {
        const filteredOnlineUsers = onlineUsers.filter(
          (user) => user.userId !== currentUserId
        );
        const friendInfoArray = [];
        for (const friend of filteredOnlineUsers) {
          await API.get(`/user/${friend.userId}`).then((res) => {
            friendInfoArray.push(res.data);
          });
        }
        setOnlineFriends(friendInfoArray);
      } catch (error) {
        console.error("Error fetching friend info:", error);
      }
    };
    fetchOnlineFriendsData();
  }, [currentUserId, onlineUsers]);
  useEffect(() => {
    setCount(onlineFriends?.length);
  }, [onlineFriends]);

  const handleCurrentChat = (friend) => {
    try {
      API.get(`/conversations/${currentUserId}/${friend._id}`).then((res) => {
        setCurrentChat(res.data);
        console.log(friend);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-sm mt-2 ml-[2rem] font-semibold ">
        Online Users({count})
      </div>
      <div className="text-white w-[15rem] h-[7.5rem] bg-slate-800 m-3 rounded-xl overflow-auto">
        {onlineFriends &&
          onlineFriends.map((friend) => (
            <>
              <div onClick={() => handleCurrentChat(friend)} key={friend._id}>
                <div className="flex p-3 cursor-pointer hover:bg-[#22AAA1]">
                  <div className="avatar online">
                    <div className="w-8 rounded-full">
                      <img src={friend.image} alt=" " />
                    </div>
                  </div>
                  <div className="pl-2">{friend.name}</div>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default ChatOnline;
