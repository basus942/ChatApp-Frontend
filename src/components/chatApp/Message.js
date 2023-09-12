// import TimeAgo from "timeago-react";
import TimeAgo from "react-timeago";
const Message = ({ message, own }) => {
  return (
    <>
      <div
        className={`flex items-center m-6 ${
          own ? `justify-end` : `justify-start`
        }`}
      >
        <div className="flex flex-col">
          <div
            className={`p-2  rounded-lg max-w-xs text-[#041B15]  ${
              own ? `bg-[#84CAE7] text-black` : `bg-[#22AAA1] text-white`
            }`}
          >
            {message.text}
          </div>
          <div className="text-xs">
            <TimeAgo date={message.createdAt} />
            {/* {message.createdAt} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Message;
