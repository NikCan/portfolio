import React from 'react';
import s from "./Footer.module.css"
import logo from "../common/images/react.png"

export function Footer() {
    return (
        <div className={s.footer}>
            <div>Nikita Gaponov</div>
            <div className={s.imgContainer}>
                <div><img src={logo}/></div>
                <div><img src={logo}/></div>
                <div><img src={logo}/></div>
                <div><img src={logo}/></div>
                <div><img src={logo}/></div>
            </div>
            <div>©2022 All Rights Reserved</div>
        </div>
    );
}

