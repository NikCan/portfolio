import React from 'react';
import s from "./Skills.module.css"
import sContainer from "../common/styles/Container.module.css"
import classNames from "classnames";
import {Skill} from "./skill/Skill";

export function Skills() {
    return (
        <div className={s.skillsBlock} id={"skills"}>
            <div className={classNames(sContainer.container, s.skillsContainer)}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill title={"HTML/CSS"}/>
                    <Skill title={"JS/TS"}/>
                    <Skill title={"React/Redux"}/>
                </div>
            </div>
        </div>
    );
}

