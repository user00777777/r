const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const messagesesReduser = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.ansver.push({ a: body });
      return state;

    default:
      return state;
  }
};
export const addMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE,
  body: body,
});

export default messagesesReduser;
