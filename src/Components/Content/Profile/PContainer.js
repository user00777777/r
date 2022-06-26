import {
  addPostActionCreator,
  updateNewPostTextCreator,
} from "../../../redux/posts-reduser";
import Post from "./Post";
import { connect } from "react-redux";
let mapStateProps = (state) => {
  return {
    posts: state.posts,
  };
};
let mapDispatchProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },

    onPostChange: (text) => {
      dispatch(updateNewPostTextCreator(text));
      console.log(text);
    },
  };
};
const PContainer = connect(mapStateProps, mapDispatchProps)(Post);
export default PContainer;
