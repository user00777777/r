import React from "react";
import Post from "./Post";
import ProfileInfo from "./ProfileInfo";

let Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <Post
        post={props.state.posts.post}
        newPostText={props.state.posts.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
