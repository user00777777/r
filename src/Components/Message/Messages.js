import { Link } from "react-router-dom";
import s from "./Message.module.css";
let Messages = (props) => {
  let path = "/Messages/" + props.id;
  return (
    <div className={s.a + "" + s.active}>
      <Link to={path}>{props.name}</Link>
      <div>{props.ans}</div>
      <div></div>
    </div>
  );
};
export default Messages;
