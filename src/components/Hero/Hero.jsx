import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Faith Juliana</h1>
                <p className={styles.description}>
                    I'm a Web Designer passionate about creating clean, user-friendly, 
                    and effective websites. I specialize in UI/UX and love bringing creative 
                    ideas to life online. Browse my portfolio to see examples of my work!
                </p>
                <a href="mailto:faithjuliana44@email.com" className={styles.contactBtn}>
                    Contact Me
                </a>
            </div>
            <img
                src={getImageUrl("../assets/home/profile.png")}
                alt=""
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};