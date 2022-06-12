import { combineReducers, legacy_createStore } from "redux";
import messagesesReduser from "./messageses-reduser";
import postsReduser from "./posts-reduser";

let redusers = combineReducers({
  posts: messagesesReduser,
  messageses: postsReduser,
});
let store = legacy_createStore(redusers);
export default store;
