import React, { useState, useEffect } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSecondPhase, setIsSecondPhase] = useState(false);
    
    const texts = ['UI/UX Designer', 'Front-End Developer'];
    
    useEffect(() => {
        const currentText = texts[currentIndex];
        const typingSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && displayText === currentText) {
            // Finished typing, wait then start deleting after a delay
            setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && displayText === '') {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        } else {
            const timer = setTimeout(() => {
                if (!isDeleting) {
                    setDisplayText(currentText.substring(0, displayText.length + 1));
                } else {
                    setDisplayText(currentText.substring(0, displayText.length - 1));
                }
            }, typingSpeed);
            
            return () => clearTimeout(timer);
        }
    }, [displayText, isDeleting, currentIndex]);
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Faith Juliana</h1>
                <p className={styles.subtitle}>And I'm a <span className={styles.animatedText}>{displayText}<span className={styles.cursor}>|</span></span></p>
                <p className={styles.description}>
                    A UI/UX Designer and Front-end Developer dedicated to creating 
                    intuitive and engaging digital experiences. I combine a deep 
                    understanding of user behavior with technical expertise to 
                    create interfaces that are both beautiful and functional. 
                    Browse my portfolio to see examples of my work!
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