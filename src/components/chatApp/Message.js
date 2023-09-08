const Message = ({ send }) => {
  return (
    <>
      <div
        className={`flex items-center m-2 ${
          send ? `justify-end` : `justify-start`
        }`}
      >
        <div className="flex flex-col">
          <div
            className={`p-2  rounded-lg max-w-xs text-[#041B15]  ${
              send ? `bg-[#84CAE7]` : `bg-[#22AAA1]`
            }`}
          >
            This is a Message This is a Message This is a Message This is a
            Message This is a Message This is a Message This is a Message This
            is a Message This is a Message This is a Message This is a Message
            This is a Message This is a Message This is a Message This is a
            Message This is a Message
          </div>
          <div className="text-xs">just now</div>
        </div>
      </div>
    </>
  );
};

export default Message;
