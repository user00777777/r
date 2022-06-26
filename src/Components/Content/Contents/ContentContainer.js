import { connect } from "react-redux";
import Users from "./Users";

let mapStateProps = (state) => {};
const ContentContainer = connect(mapStateProps)(Users);
export default ContentContainer;
