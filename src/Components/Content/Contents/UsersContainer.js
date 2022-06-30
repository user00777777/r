import { connect } from "react-redux";
import { followAC, setUserAC, unFollowAC } from "../../../redux/user-reduser";
import Users from "./Users";

let mapStateProps = (state) => {
  debugger;
  return {
    users: state.usersPage.users,
  };
};

let mapDispatchToProps = (dispatch) => {
  debugger;
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unFollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUserAC(users));
    },
  };
};
const UsersContainer = connect(mapStateProps, mapDispatchToProps)(Users);
export default UsersContainer;
