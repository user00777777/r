// import messagesesReduser from "./messageses-reduser";
// import postsReduser from "./posts-reduser";

// // let ansver = [
// //   { a: "Hi" },
// //   { a: "How are you" },
// //   { a: "Hello" },
// //   { a: "Good day" },
// // ];
// // let message = [
// //   { name: "Тригуб", id: 1 },
// //   { name: "Самбур", id: 2 },
// //   { name: "Петриченко", id: 3 },
// //   { name: "Бондаренко", id: 4 },
// // ];
// let store = {
//   _state: {
//     messageses: {
//       ansver: [
//         { a: "Hi ЧУВАК" },
//         { a: "How are you" },
//         { a: "Hello" },
//         { a: "Good day" },
//       ],
//       message: [
//         { name: "Тригуб", id: 1 },
//         { name: "Самбур", id: 2 },
//         { name: "Петриченко", id: 3 },
//         { name: "Бондаренко", id: 4 },
//       ],
//       newMessageBody: " ",
//     },
//     posts: {
//       post: [
//         { id: 1, message: "привет", likeCount: 1 },
//         { id: 2, message: "hi", likeCount: 12 },
//         { id: 3, message: "Hello", likeCount: 13 },
//         { id: 4, message: "Goodmorning", likeCount: 14 },
//       ],
//       newPostText: " f",
//     },
//   },

//   _calls() {
//     console.log("привет");
//   },
//   getState() {
//     return this._state;
//   },

//   subscribe(observer) {
//     this._calls = observer;
//   },
//   dispatch(action) {
//     debugger;
//     this._state.messageses = messagesesReduser(this._state.messageses, action);
//     this._state.posts = postsReduser(this._state.posts, action);

//     this._calls(this._state);
//   },
// };
// window.store = store;

// export default store;
