import {
  addMessageCreator,
  updateNewMessageCreator,
} from "../../redux/messageses-reduser";

import StoreContext from "../../StoreContext";
import Message from "./Message";

const MessageComtainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const newMessageBody = store.getState().messageses.newMessageBody;
        let messageses = store.getState().messageses;

        let onMessageChange = (body) => {
          store.dispatch(updateNewMessageCreator(body));
        };
        let onAddMessage = () => {
          store.dispatch(addMessageCreator());
        };
        return (
          <Message
            newMessageBody={newMessageBody}
            messageChange={onMessageChange}
            addMessage={onAddMessage}
            messageses={messageses}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};
export default MessageComtainer;
