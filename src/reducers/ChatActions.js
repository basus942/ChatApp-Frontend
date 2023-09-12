import { API } from "../config/api";
export const ChatActions = {
  currentChat: (conversation, dispatch, currentUserId) => {
    const friendId = conversation.members.find((id) => id !== currentUserId);
    const getFriendInfo = async () => {
      try {
        const res = await API.get(`/user/${friendId}`);
        dispatch({
          type: "currentChat",
          currentChat: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getFriendInfo();
  },
};
