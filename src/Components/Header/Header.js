import React from "react";

import s from "./Header.module.css";

let Header = () => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.s}
        src="https://cdn2.iconfinder.com/data/icons/black-man-professions-1/512/profession_avatar_man_people_user_professional_black_work_job-44-128.png"
        alt="foto"
        srcSet=""
      />
    </div>
  );
};

export default Header;
