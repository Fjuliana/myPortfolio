import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/Laptop-Mockup.png")} className={styles.aboutImage} alt="Laptop mockup" />
                <div className={styles.aboutItems}>
                    <div className={styles.aboutItemText}>
                        <p>
                            I'm a UI/UX Designer and Front-End Developer driven by a passion 
                            for solving complex problems and creating impactful digital
                            solutions. I thrive on the challenge of understanding user needs
                            and translating them into intuitive and engaging interfaces.
                            My development skills allow me to bring those designs to life 
                            with clean, efficient code, ensuring that every project delivers 
                            exceptional results and achieves its business objectives. I'm 
                            committed to creating user-centered experiences that are both
                            beautiful and effective.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
