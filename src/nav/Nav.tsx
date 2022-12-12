import React from 'react';
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";

export function Nav() {
    return (
        <div className={s.nav}>
            <NavLink to="/main" className={({isActive}) => isActive ? s.active : ""}>Main</NavLink>
            <NavLink to="/skills" className={({isActive}) => isActive ? s.active : ""}>Skills</NavLink>
            <NavLink to="/projects" className={({isActive}) => isActive ? s.active : ""}>Projects</NavLink>
            <NavLink to="/contacts" className={({isActive}) => isActive ? s.active : ""}>Contacts</NavLink>
        </div>
    );
}

