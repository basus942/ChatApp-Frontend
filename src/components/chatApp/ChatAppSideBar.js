import { useUserData } from "../../contexts/UserContext";
import Navbar from "./Navbar";
import ConversationList from "./ConversationList";
import ChatOnline from "./ChatOnline";
const ChatAppSideBar = ({
  conversations,
  setCurrentChat,
  userId,
  onlineUsers,
}) => {
  const userData = useUserData();
  return (
    <>
      <div className="flex flex-col">
        <Navbar
          image={userData.state.userData.image}
          name={userData.state.userData.name}
        />

        <ChatOnline
          className="justify-center"
          onlineUsers={onlineUsers}
          currentUserId={userId}
          setCurrentChat={setCurrentChat}
        />

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
    </>
  );
};

export default ChatAppSideBar;
