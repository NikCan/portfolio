import React from 'react';
import s from "./Projects.module.scss"
import {Project} from "./project/Project";
import {Title} from "../common/components/Title/Title";
import socialNetworkImg from '../assets/images/social-network.png'
import todoImg from '../assets/images/to-do-list.png'

export function Projects() {
  const social = {
    backgroundImage: `url(${socialNetworkImg})`,
  }
  const todo = {
    backgroundImage: `url(${todoImg})`,
  }
  return (
    <div className={s.projectsBlock} id={"projects"}>
      <div className={s.projectsContainer}>
        <div className={s.title}><Title text={"My Projects"}/></div>
        <div className={s.projects}
        >
          <Project title={"Social Network"} link={"https://nikcan.github.io/social-network/"} style={social}/>
          <Project title={"ToDo List"} link={"https://github.com/NikCan/todolist"} style={todo}/>
        </div>
      </div>
    </div>
  );
}

