import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contacts/gmail.png")} alt="Email icon" />
                    <a href="mailto:faithjuliana44@email.com">faithjuliana44@email.com</a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contacts/linkedin.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/faith-juliana-lema-464162302">linkedin.com/faithjulianalema</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contacts/github.png")} alt="Github icon" />
                    <a href="https://github.com/Fjuliana">github.com/Fjuliana</a>
                </li>
            </ul>
        </footer>
    );
};
