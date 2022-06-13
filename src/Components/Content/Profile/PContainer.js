import {
  addPostActionCreator,
  updateNewPostTextCreator,
} from "../../../redux/posts-reduser";
import StoreContext from "../../../StoreContext";
import Post from "./Post";

const PContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let newPostText = store.getState().posts.newPostText;
        let addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        let onPostChange = (text) => {
          let action = updateNewPostTextCreator(text);
          store.dispatch(action);
        };

        return (
          <Post
            onAddPost={addPost}
            onPostChange={onPostChange}
            post={store.getState().posts.post}
            newPostText={newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default PContainer;
