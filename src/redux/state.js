import messagesesReduser from "./messageses-reduser";
import postsReduser from "./posts-reduser";

// let ansver = [
//   { a: "Hi" },
//   { a: "How are you" },
//   { a: "Hello" },
//   { a: "Good day" },
// ];
// let message = [
//   { name: "Тригуб", id: 1 },
//   { name: "Самбур", id: 2 },
//   { name: "Петриченко", id: 3 },
//   { name: "Бондаренко", id: 4 },
// ];
let store = {
  getState() {
    return this._state;
  },
  _state: {
    messageses: {
      ansver: [
        { a: "Hi" },
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
    },
    posts: {
      post: [
        { id: 1, message: "привет", likeCount: 1 },
        { id: 2, message: "hi", likeCount: 12 },
        { id: 3, message: "Hello", likeCount: 13 },
        { id: 4, message: "Goodmorning", likeCount: 14 },
      ],
      newPostText: " ",
    },
  },
  _calls() {
    console.log("привет");
  },

  subscribe(observer) {
    this._calls = observer;
  },
  dispatch(action) {
    // switch (action) {
    //   case action.type === "ADD-POST":
    //     let newPost = { id: 5, message: this._state.newPostText, likeCount: 0 };
    //     this._state.post.push(newPost);
    //     this._state.newPostText = "";
    //     this._calls(this._state);
    //     break;
    //   case action.type === "UPDATE-NEW-POST-TEXT":
    //     this._state.newPostText = action.postchange;
    //     this._calls(this._state);
    // }
    this._state.messageses = messagesesReduser(this._state.messageses, action);
    this._state.posts = postsReduser(this._state.posts, action);
    this._calls(this._state);
  },
};
window.store = store;

export default store;
