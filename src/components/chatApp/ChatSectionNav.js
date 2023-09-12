import { useEffect, useState } from "react";
import { API } from "../../config/api";

const ChatSectionNav = ({ receiverId }) => {
  const [friendInfo, setFriendInfo] = useState([]);
  useEffect(() => {
    API.get(`/user/${receiverId}`).then((res) => {
      setFriendInfo(res.data);
    });
  }, [receiverId]);

  return (
    <div className="flex justify-left items-center bg-[#22AAA1] px-10 py-1 ">
      <div className="avatar">
        <div className="w-10 m-1 rounded-full">
          <img src={friendInfo.image} alt="profilpic" />
        </div>
      </div>
      <div className="ml-6 text-lg font-semibold drop-shadow-md ">
        {friendInfo.name}
      </div>
    </div>
  );
};

export default ChatSectionNav;
