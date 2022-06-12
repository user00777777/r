import s from "./Message.module.css";
import Messages from "./Messages";
import React from "react";
import {
  addMessageCreator,
  updateNewMessageCreator,
} from "../../redux/messageses-reduser";

let Message = (props) => {
  // let state = props.state;
  const newMessageBody = props.store.getState().messageses.newMessageBody;

  let messageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageCreator(body));
  };
  let addMessage = () => {
    props.store.dispatch(addMessageCreator());
  };
  let id = props.state.messageses.message.map((el) => {
    return <Messages id={el.id} name={el.name} />;
  });
  let ansvers = props.state.messageses.ansver.map((an) => {
    return <Messages ans={an.a} />;
  });

  return (
    <div className={s.wrapper}>
      <div>{id}</div>
      <div>{ansvers}</div>
      <div>
        {" "}
        <textarea onChange={messageChange} value={newMessageBody} />
      </div>
      <div>
        <button onClick={addMessage} id="btn">
          push
        </button>
      </div>
    </div>
  );
};

export default Message;
