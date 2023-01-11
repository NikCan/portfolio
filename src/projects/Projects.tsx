import React from 'react';
import s from "./Projects.module.css"
import sContainer from "../common/styles/Container.module.css"
import classNames from "classnames";
import {Project} from "./project/Project";
import {Title} from "../common/components/Title/Title";

export function Projects() {
    return (
        <div className={s.projectsBlock}>
            <div className={classNames(sContainer.container, s.projectsContainer)}>
            <Title title={"My Projects"}/>
                <div className={s.projects}>
                    <Project title={"Social Network"} link={"/social_network"}/>
                    <Project title={"ToDo List"} link={"/todo_list"}/>
                </div>
            </div>
        </div>
    );
}

