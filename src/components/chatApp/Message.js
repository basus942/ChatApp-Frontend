const Message = ({ message, own }) => {
  console.log(own);
  return (
    <>
      <div
        className={`flex items-center m-2 ${
          own ? `justify-end` : `justify-start`
        }`}
      >
        <div className="flex flex-col">
          <div
            className={`p-2  rounded-lg max-w-xs text-[#041B15]  ${
              own ? `bg-[#84CAE7]` : `bg-[#22AAA1]`
            }`}
          >
            {message.text}
          </div>
          <div className="text-xs">just now</div>
        </div>
      </div>
    </>
  );
};

export default Message;
