import s from "./Message.module.css";
import Messages from "./Messages";
import React from "react";

let Message = (props) => {
  // let state = props.state;

  let messageChange = (event) => {
    let body = event.target.value;
    props.onMessageChange(body); //props.store.dispatch(updateNewMessageCreator(body));
  };
  let addMessage = () => {
    props.onAddMessage(); // props.store.dispatch(addMessageCreator());
  };
  let id = props.messageses.message.map((el) => {
    return <Messages id={el.id} key={el.id} name={el.name} />;
  });
  let ansvers = props.messageses.ansver.map((an) => {
    return <Messages ans={an.a} key={an.id} />;
  });

  return (
    <div className={s.wrapper}>
      <div>{id}</div>
      <div>{ansvers}</div>
      <div>
        {" "}
        <textarea
          onChange={messageChange}
          value={props.messageses.newMessageBody}
        />
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
