import {
  addMessageCreator,
  updateNewMessageCreator,
} from "../../redux/messageses-reduser";
import Message from "./Message";
import { connect } from "react-redux";
let mapStateToProps = (state) => {
  return {
    messageses: state.messageses,
    
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: () => dispatch(addMessageCreator()),
    onMessageChange: (body) => {
      console.log(body);
      let action = updateNewMessageCreator(body);

      dispatch(action);
    },
  };
};
const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);
export default MessageContainer;
