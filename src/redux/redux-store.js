import { combineReducers, legacy_createStore } from "redux";
import messagesesReduser from "./messageses-reduser";
import postsReduser from "./posts-reduser";
import userReduser from "./user-reduser";

let redusers = combineReducers({
  posts: postsReduser,
  messageses: messagesesReduser,
  usersPage: userReduser,
});
let store = legacy_createStore(redusers);
window.store = store;
export default store;
