import {
  addPostActionCreator,
  updateNewPostTextCreator,
} from "../../../redux/posts-reduser";
import Post from "./Post";

const PContainer = (props) => {
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
    />
  );
};
export default PContainer;
