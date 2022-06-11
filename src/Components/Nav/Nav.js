import s from "./Nav.module.css";
import { Link, NavLink } from "react-router-dom";

let Nav = () => {
  return (
    <div className={s.wrapper}>
      <Link to="/Profile">Profile</Link>
      <Link to="/Message">Message</Link>
      <NavLink to="/Content">Content </NavLink>
      <div>
        <Link to="/Header">News</Link>
      </div>
      <div>Settings</div>
      <p></p>
    </div>
  );
};
export default Nav;
