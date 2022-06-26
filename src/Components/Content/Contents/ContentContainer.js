import { connect } from "react-redux";
import Users from "./Users";

let mapStateProps = (state) => {};
const UsersContainer = connect(mapStateProps)(Users);
export default UsersContainer;
