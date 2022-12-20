import React from 'react';
import s from "./HireMe.module.css"
import sContainer from "../common/styles/Container.module.css"
import classNames from "classnames";

export function HireMe() {
    return (
        <div className={s.hireMeBlock}>
            <div className={classNames(sContainer.container, s.hireMeContainer)}>
                <h3> I Am Available For Freelancer</h3>
                <div><a href="#contact">HIRE ME</a></div>
            </div>
        </div>
    );
}

