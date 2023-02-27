import React from 'react';
import s from "./HireMe.module.scss"
import b from "../common/styles/Button.module.scss"
import {Title} from "../common/components/Title/Title";

export function HireMe() {
    return (
        <div className={s.hireMeBlock}>
            <div className={s.hireMeContainer}>
                <div className={s.title}><Title text={'I Am Available For Freelancer'}/></div>
                <div><a className={b.button} href="#contact">hire me</a></div>
            </div>
        </div>
    );
}

