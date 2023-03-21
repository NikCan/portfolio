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
        <a target="_blank" href="https://www.linkedin.com/in/nikita-gaponov"><img src={linkedInImg} alt="linkedIn"/></a>
        <a target="_blank" href="https://www.codewars.com/users/NikCan"><img src={codeImg} alt="codeWars"/></a>
        <a target="_blank" href="https://github.com/NikCan"><img src={gitImg} alt="git"/></a>
        <a target="_blank" href="https://t.me/GaponovNikita"><img src={tgImg} alt="telegram"/></a>
        <a target="_blank" href="https://vk.com/nikitagaponov"><img src={vkImg} alt="vk"/></a>
      </div>
    </div>
  );
}

