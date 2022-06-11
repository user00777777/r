const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const postsReduser = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let tex = state.newPostText;
      state.newPostText = " ";
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
