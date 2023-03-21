import React from 'react';
import s from "./Skills.module.scss"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title/Title";
import htmlCssImg from "../assets/images/html-css.png";
import jsTsImg from "../assets/images/js-ts.png";
import reactReduxImg from "../assets/images/React-Redux.png";

export function Skills() {
  const htmlSkill = {
    backgroundImage: `url(${htmlCssImg})`,
    borderRadius: '5px',
  }
  const tsSkill = {
    backgroundImage: `url(${jsTsImg})`,
    borderRadius: '5px',
  }
  const reactSkill = {
    backgroundImage: `url(${reactReduxImg})`,
    borderRadius: '5px',
  }
  return (
    <div className={s.skillsBlock} id={"skills"}>
      <div className={s.skillsContainer}>
        <div className={s.title}><Title text={'My Skills'}/></div>
        <div data-aos="fade-left"
             data-aos-duration="1000"
             data-aos-easing="ease-in-out"
             className={s.skills}
        >
          <Skill title={"HTML/CSS"} style={htmlSkill}/>
          <Skill title={"JS/TS"} style={tsSkill}/>
          <Skill title={"React/Redux"} style={reactSkill}/>
        </div>
      </div>
    </div>
  );
}

