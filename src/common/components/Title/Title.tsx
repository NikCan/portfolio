import s from "./Title.module.scss";
import React from "react";

type TitlePropsType = {
    text: string
}

export const Title = (props: TitlePropsType) => {
    return <div className={s.title}><h2>{props.text}</h2></div>
}

