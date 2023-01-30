import React from 'react';
import s from "./Footer.module.scss"
import linkedInImg from '../assets/images/linkedin-svgrepo-com.svg'
import gitImg from '../assets/images/github-svgrepo-com.svg'
import codeImg from '../assets/images/codewars-svgrepo-com.svg'
import tgImg from '../assets/images/telegram-svgrepo-com.svg'
import vkImg from '../assets/images/vk-v2-svgrepo-com.svg'

export function Footer() {
    return (
        <div className={s.footer}>
            <div>Nikita Gaponov</div>
            <div>©2023 All Rights Reserved</div>
            <div className={s.imageContainer}>
                <img src={linkedInImg} alt="linkedIn"/>
                <img src={codeImg} alt="codeWars"/>
                <img src={gitImg} alt="git"/>
                <img src={tgImg} alt="telegramm"/>
                <img src={vkImg} alt="vk"/>
            </div>
        </div>
    );
}

