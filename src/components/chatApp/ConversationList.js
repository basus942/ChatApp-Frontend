import { useEffect, useState } from "react";
import { API } from "../../config/api";
const ConversationList = ({ conversation, currentUserId }) => {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    const friendId = conversation.members.find((id) => id !== currentUserId);
    const getFriendInfo = async () => {
      try {
        const res = await API.get(`/user/${friendId}`);
        setFriend(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriendInfo();
  }, [conversation, currentUserId]);

  return (
    <>
      <div className="flex justify-left items-center p-2 hover:bg-[#22AAA1]  m-1 rounded-lg hover:cursor-pointer">
        <div className="avatar ">
          <div className="w-12 rounded-full">
            <img
              src={friend.image ? friend.image : "no-profile-picture.jpg"}
              alt="profilepic"
            />
          </div>
        </div>
        <div className="ml-6">{friend.name}</div>
      </div>
    </>
  );
};

export default ConversationList;
