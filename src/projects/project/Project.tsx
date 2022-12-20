import React from 'react';
import s from "./Project.module.css"
import {loremIpsum} from "lorem-ipsum";
import {NavLink} from "react-router-dom";

type SkillPropsType = {
    title: string
    link: string
}

export function Project(props: SkillPropsType) {
    return (
        <div className={s.project}>
            <div className={s.imageContainer}>
                <div className={s.icon}>
                    <NavLink to={`/projects${props.link}`} className={({isActive}) => isActive ? s.active : ""}>View</NavLink>
                </div>
            </div>

            <h3>{props.title}</h3>
            <span className={s.description}>
                {loremIpsum({count: 1})}</span>
        </div>
    );
}

