import React from 'react';
import s from "./Contact.module.css"
import sContainer from "../common/styles/Container.module.css"
import classNames from "classnames";

export function Contact() {
    return (
        <div className={s.contactBlock} id={"contact"}>
            <div className={classNames(sContainer.container, s.contactContainer)}>
                <h2 className={s.title}>Contact</h2>
                <form action="#" className={s.formContainer}>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="E-mail"/>
                        <textarea rows={7} placeholder="Your message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>

            </div>
        </div>
    );
}

