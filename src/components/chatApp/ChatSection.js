import ChatSectionFooter from "./ChatSectionFooter";
import ChatSectionNav from "./ChatSectionNav";
import Message from "./Message";

const ChatSection = () => {
  return (
    <div className="flex flex-col h-full ">
      <ChatSectionNav />
      <div className="overflow-auto flex-grow ">
        <Message send={false} />
        <Message send={true} />
        <Message send={false} />
      </div>
      <ChatSectionFooter />
    </div>
  );
};

export default ChatSection;
