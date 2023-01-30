import React from 'react';
import s from "./Skills.module.scss"
import sContainer from "../common/styles/Container.module.scss"
import classNames from "classnames";
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title/Title";
import htmlCssImg from "../assets/images/html-css.png";
import jsTsImg from "../assets/images/js-ts.png";
import reactReduxImg from "../assets/images/React-Redux.png";

export function Skills() {
    const htmlSkill = {
        backgroundImage: `url(${htmlCssImg})`,
    }
    const tsSkill = {
        backgroundImage: `url(${jsTsImg})`,
    }
    const reactSkill = {
        backgroundImage: `url(${reactReduxImg})`,
    }
    return (
        <div className={s.skillsBlock} id={"skills"}>
            <div className={classNames(sContainer.container, s.skillsContainer)}>
                <div className={s.title}><Title text={'My Skills'}/></div>
                <div className={s.skills}>
                    <Skill title={"HTML/CSS"} style={htmlSkill}/>
                    <Skill title={"JS/TS"} style={tsSkill}/>
                    <Skill title={"React/Redux"} style={reactSkill}/>
                </div>
            </div>
        </div>
    );
}

