import {
  addMessageCreator,
  updateNewMessageCreator,
} from "../../redux/messageses-reduser";
import Message from "./Message";

const MessageComtainer = (props) => {
  const newMessageBody = props.store.getState().messageses.newMessageBody;
  let messageses = props.store.getState().messageses;

  let onMessageChange = (body) => {
    props.store.dispatch(updateNewMessageCreator(body));
  };
  let onAddMessage = () => {
    props.store.dispatch(addMessageCreator());
  };
  return (
    <Message
      newMessageBody={newMessageBody}
      messageChange={onMessageChange}
      addMessage={onAddMessage}
      messageses={messageses}
    />
  );
};
export default MessageComtainer;
