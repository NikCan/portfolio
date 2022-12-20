import React from 'react';
import s from "./Projects.module.css"
import sContainer from "../common/styles/Container.module.css"
import classNames from "classnames";
import {Project} from "./project/Project";

export function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={classNames(sContainer.container, s.projectsContainer)}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project title={"Social Network"} link={"/social_network"}/>
                    <Project title={"ToDo List"} link={"/todo_list"}/>
                </div>
            </div>
        </div>
    );
}

