import React from 'react';
import s from "./Skill.module.scss"
import {loremIpsum} from "lorem-ipsum";

type SkillPropsType = {
    title: string
    style: { backgroundImage: string }
}

export function Skill(props: SkillPropsType) {
    return (
        <div className={s.skill}>
            <div className={s.icon} style={props.style}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {loremIpsum({count: 3})}</span>
        </div>
    );
}

