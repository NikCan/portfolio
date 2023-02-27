import React from 'react';
import s from "./Main.module.scss"
import avatar from "../assets/images/me.jpg"

export function Main() {
  return (
    <div className={s.mainBlock} id={"main"}>
      <div className={s.container}>
        <div className={s.introduction}>
          <span>Hello, I am</span>
          <h1>Gaponov Nikita</h1>
          <p>I am Frontend-developer</p>
        </div>
        <div className={s.photo} style={{backgroundImage: `url(${avatar})`}}>
        </div>
      </div>
    </div>
  );
}

