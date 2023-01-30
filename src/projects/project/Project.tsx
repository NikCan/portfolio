import React from 'react';
import s from "./Project.module.scss"
import b from "../../common/styles/Button.module.scss"
import {loremIpsum} from "lorem-ipsum";
import {NavLink} from "react-router-dom";

type SkillPropsType = {
    title: string
    link: string
    style: { backgroundImage: string; }
}

export function Project(props: SkillPropsType) {
    return (
        <div className={s.project}>
            <div className={s.imageContainer}>
                <div className={s.icon} style={props.style}>
                    <NavLink to={`/projects${props.link}`}
                             className={b.button}>View</NavLink>
                </div>
            </div>
            <div className={s.descriptionBlock}>
                <h5 className={s.title}>{props.title}</h5>
                <span className={s.description}>
                {loremIpsum({count: 1})}</span>
            </div>
        </div>
    );
}

