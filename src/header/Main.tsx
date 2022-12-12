import React from 'react';
import s from "./Main.module.css"
import sContainer from "../common/styles/Container.module.css"

export function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
            <div className={s.introduction}>
                <span>Hi There</span>
                <h1>I am Gaponov Nikita</h1>
                <p>Frontend-developer</p>
            </div>
            <div className={s.photo}>
            </div>
            </div>
        </div>
    );
}

