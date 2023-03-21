import React from 'react';
import s from "./Contact.module.scss"
import b from "../common/styles/Button.module.scss"
import {Title} from "../common/components/Title/Title";

export function Contact() {
  return (
    <div className={s.contactBlock} id={"contact"}>
      <div className={s.contactContainer}>
        <div className={s.title}><Title text={'Contact'}/></div>
        <form data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              action="#"
              className={s.formContainer}
        >
          <input type="text" placeholder="Name"/>
          <input type="email" placeholder="E-mail"/>
          <textarea rows={7} placeholder="Your message"></textarea>
          <button type="submit" className={b.button}>send message</button>
        </form>
      </div>
    </div>
  )
    ;
}

