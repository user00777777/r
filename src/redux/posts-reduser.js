const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
let initialState = {
  post: [
    { id: 1, message: "привет", likeCount: 1 },
    { id: 2, message: "hi", likeCount: 12 },
    { id: 3, message: "Hello", likeCount: 13 },
    { id: 4, message: "Goodmorning", likeCount: 14 },
  ],
  newPostText: "",
};

const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let tex = state.newPostText;
      state.newPostText = "";
      state.post.push({ message: tex });
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
    default:
      return state;
  }
};
export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});
export default postsReduser;
