import { useRef } from "react";
import { API } from "../../config/api";
const ChatSectionFooter = ({
  setMessage,
  userId,
  currentChatid,
  messages,
  socket,
  receiverId,
}) => {
  const newMessage = useRef("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const message = {
      senderId: userId,
      conversationId: currentChatid,
      text: newMessage.current.value,
    };

    try {
      await API.post("/messages", message).then((res) => {
        setMessage([...messages, res.data]);
        socket?.emit("sendMessage", {
          senderId: userId,
          receiverId: receiverId,
          text: newMessage.current.value,
        });
        newMessage.current.value = "";
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form
      className="w-[35rem] bg-[#040D12] flex items-center justify-center"
      onSubmit={handleSendMessage}
    >
      <input
        ref={newMessage}
        type="text"
        placeholder="Type here"
        className="input input-bordered  w-full max-w-sm bg-[#040D12] m-1"
      />
      <button className="hover:rotate-45 hover:cursor-pointer bg-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-send"
          viewBox="0 0 16 16"
        >
          <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />{" "}
        </svg>
      </button>
    </form>
  );
};

export default ChatSectionFooter;
