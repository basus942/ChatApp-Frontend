const ConversationList = () => {
  return (
    <>
      <div className="flex justify-left items-center p-2 hover:bg-[#22AAA1]  m-1 rounded-lg hover:cursor-pointer">
        <div className="avatar ">
          <div className="w-12 rounded-full">
            <img
              src="https://i.pinimg.com/564x/d7/97/51/d79751592b2a178035fa283352d88e4a.jpg"
              alt="profilepic"
            />
          </div>
        </div>
        <div className="ml-6"> Gal Gadot</div>
      </div>
    </>
  );
};

export default ConversationList;
