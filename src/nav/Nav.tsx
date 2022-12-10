import React from 'react';
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <div className={s.nav}>
            <NavLink to="/main" className={({isActive}) => isActive ? s.active : undefined}>Main</NavLink>
            <NavLink to="/skills" className={({isActive}) => isActive ? s.active : undefined}>Skills</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? s.active : undefined}>Projects</NavLink>
            <NavLink to="/contacts" className={({isActive}) => isActive ? s.active : undefined}>Contacts</NavLink>
        </div>
    );
}

