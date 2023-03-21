import React from 'react';
import s from "./Nav.module.scss"
import {Link} from "react-scroll";

export function Nav() {
  return (
    <div className={s.nav}>
      <Link smooth={true} activeClass={s.active} offset={1} spy={true} to="main">Main</Link>
      <Link smooth={true} activeClass={s.active} offset={1} spy={true} to="skills">Skills</Link>
      <Link smooth={true} activeClass={s.active} offset={1} spy={true} to="projects">Projects</Link>
      <Link smooth={true} activeClass={s.active} offset={1} spy={true} to="contact">Contact</Link>
    </div>
  );
}

