import {
  addMessageCreator,
  updateNewMessageCreator,
} from "../../redux/messageses-reduser";
import Message from "./Message";
import { connect } from "react-redux";

// const MessageComtainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         const newMessageBody = store.getState().messageses.newMessageBody;
//         let messageses = store.getState().messageses;

//         let onMessageChange = (body) => {
//           store.dispatch(updateNewMessageCreator(body));
//         };
//         let onAddMessage = () => {
//           store.dispatch(addMessageCreator());
//         };
//         return (
//           <Message
//             newMessageBody={newMessageBody}
//             messageChange={onMessageChange}
//             addMessage={onAddMessage}
//             messageses={messageses}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };
let mapStateToProps = (state) => {
  return {
    messageses: state.messageses,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: dispatch(addMessageCreator()),
    onMessageChange: (body) => {
      dispatch(updateNewMessageCreator(body));
    },
  };
};
const MessageContainer = connect(mapStateToProps, mapDispatchToProps)(Message);
export default MessageContainer;
