const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
let initialState = {
  ansver: [
    { a: "Hi ЧУВАК" },
    { a: "How are you" },
    { a: "Hello" },
    { a: "Good day" },
  ],
  message: [
    { name: "Тригуб", id: 1 },
    { name: "Самбур", id: 2 },
    { name: "Петриченко", id: 3 },
    { name: "Бондаренко", id: 4 },
  ],
  newMessageBody: " ",
};

const messagesesReduser = (state = initialState, action) => {
  let stateCopy = { ...state, ansver: [...state.ansver] };
  stateCopy.ansver = [...state.ansver];
  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      return { ...state, newMessageBody: action.body };

    case SEND_MESSAGE:
      let body = state.newMessageBody;

      return {
        ...state,
        newMessageBody: "",
        ansver: [...state.ansver, { a: body }],
      };

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
