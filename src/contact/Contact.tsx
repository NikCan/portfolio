import React from 'react';
import s from "./Contact.module.scss"
import b from "../common/styles/Button.module.scss"
import sContainer from "../common/styles/Container.module.scss"
import classNames from "classnames";
import {Title} from "../common/components/Title/Title";

export function Contact() {
    return (
        <div className={s.contactBlock} id={"contact"}>
            <div className={classNames(sContainer.container, s.contactContainer)}>
                <div className={s.title}><Title text={'Contact'}/></div>
                <form action="#" className={s.formContainer}>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="E-mail"/>
                    <textarea rows={7} placeholder="Your message"></textarea>
                    <button type="submit" className={b.button}>send message</button>
                </form>

            </div>
        </div>
    );
}

