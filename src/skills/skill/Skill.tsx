import React from 'react';
import s from "./Skill.module.css"
import {loremIpsum} from "lorem-ipsum";

type SkillPropsType = {
    title: string
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {loremIpsum({count: 3})}</span>
        </div>
    );
}

