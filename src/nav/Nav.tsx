import React from 'react';
import s from "./Nav.module.css"

export function Nav() {
    return (
        <div className={s.nav}>
            <a href="#main">Main</a>
            <a href="#skills">Skills</a>
            <a href="#">Projects</a>
            <a href="#contact">Contact</a>
        </div>
    );
}

