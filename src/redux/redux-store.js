import { combineReducers, legacy_createStore } from "redux";
import messagesesReduser from "./messageses-reduser";
import postsReduser from "./posts-reduser";

let redusers = combineReducers({
  posts: postsReduser,
  messageses: messagesesReduser,
});
let store = legacy_createStore(redusers);
window.store = store;
export default store;
