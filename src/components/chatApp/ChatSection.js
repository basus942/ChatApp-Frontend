import ChatSectionFooter from "./ChatSectionFooter";
import ChatSectionNav from "./ChatSectionNav";
import Message from "./Message";

const ChatSection = ({ messages, currentUserId }) => {
  console.log("Current User ID:", currentUserId);
  return (
    <div className="flex flex-col h-full ">
      <ChatSectionNav />
      <div className="overflow-auto flex-grow ">
        {messages.map((m) => {
          return <Message message={m} own={m.senderId === currentUserId} />;
        })}
      </div>
      <ChatSectionFooter />
    </div>
  );
};

export default ChatSection;
