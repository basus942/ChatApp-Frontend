import ChatSectionFooter from "./ChatSectionFooter";
import ChatSectionNav from "./ChatSectionNav";
import Message from "./Message";

const ChatSection = ({
  messages,
  currentUserId,
  setMessage,
  currentChatid,
  socket,
  receiverId,
}) => {
  return (
    <div className="flex flex-col h-full ">
      <ChatSectionNav receiverId={receiverId} />
      <div className="overflow-auto flex-grow ">
        {messages.map((m) => {
          return <Message message={m} own={m.senderId === currentUserId} />;
        })}
      </div>
      <ChatSectionFooter
        setMessage={setMessage}
        userId={currentUserId}
        currentChatid={currentChatid}
        messages={messages}
        socket={socket}
        receiverId={receiverId}
      />
    </div>
  );
};

export default ChatSection;
