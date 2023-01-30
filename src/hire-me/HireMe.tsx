import React from 'react';
import s from "./HireMe.module.scss"
import sContainer from "../common/styles/Container.module.scss"
import b from "../common/styles/Button.module.scss"
import classNames from "classnames";
import {Title} from "../common/components/Title/Title";

export function HireMe() {
    return (
        <div className={s.hireMeBlock}>
            <div className={classNames(sContainer.container, s.hireMeContainer)}>
                <div className={s.title}><Title text={'I Am Available For Freelancer'}/></div>
                <div><a className={b.button} href="#contact">hire me</a></div>
            </div>
        </div>
    );
}

