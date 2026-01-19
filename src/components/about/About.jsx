import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About Me</h2>
            <div className={styles.content}>
                <div className={styles.aboutCard}>
                    <p className={styles.aboutText}>
                                                Hi! I'm a BS Information Technology student with skills as a UI/UX Designer
                                                 and Front-End Developer. I love turning ideas into easy-to-use digital tools, 
                                                 and I was one of the project leads for OJTracker and Trove System – two solutions 
                                                 we built for our academic requirements.
                    </p>
                    <p className={styles.aboutTextAccomplishment}>
                                                 My biggest accomplishment so far has been helping to lead the design and development 
                                                of these two projects. OJTracker is made to help manage on-the-job training processes 
                                                for students, while Trove System is built to track and manage the funds of school 
                                                organizations. It also makes it convenient for students to pay their dues and fees 
                                                for the clubs and organizations they're part of. Seeing these ideas grow from simple 
                                                plans into fully working systems with my team has meant a lot to me.
                    </p>
                </div>
                <div className={styles.aboutItems}>
                    <div className={styles.aboutItemText}>
                        <p>
                            I'm most interested in web design and development, focusing on intuitive interfaces 
                            that run smoothly. I'm also curious about mobile app design and making digital tools 
                            accessible to everyone. For my goals, I want to get better at both design and development, 
                            especially for community-focused platforms. I plan to learn backend 
                            development to build complete solutions on my own. Eventually, I hope to work on projects 
                            that help schools and local groups solve real problems, and maybe create tools for students 
                            across different campuses. I'm excited to continue learning and growing in these areas 
                            and contributing to the tech community.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
