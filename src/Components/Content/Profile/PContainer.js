import {
  addPostActionCreator,
  updateNewPostTextCreator,
} from "../../../redux/posts-reduser";
import Post from "./Post";

const PContainer = (props) => {
  let newPostText = props.store.getState().posts.newPostText;
  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };
  let onPostChange = (text) => {
    let action = updateNewPostTextCreator(text);
    props.store.dispatch(action);
  };

  return (
    <Post
      onAddPost={addPost}
      onPostChange={onPostChange}
      post={props.store.getState().posts.post}
      newPostText={newPostText}
    />
  );
};
export default PContainer;
