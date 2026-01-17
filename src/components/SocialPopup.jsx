import React, { useState, useEffect, useRef } from "react";
import styles from "../style/SocialPopUp.module.css";

const SocialPopup = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs to keep track of timers
  const intervalRef = useRef(null);
  const timeoutOutRef = useRef(null);
  const timeoutNextRef = useRef(null);

  const socialData = [
    { top: "Join the Future", main: "WhatsApp Career Channel", link: "https://whatsapp.com/channel/0029Vb7Lp7f90x2w8MBlPV44"  , icon: "/images/whatsapp.svg" },
    { top: "Visual Stories", main: "Explore Internship Reels", link: "https://www.instagram.com/getinternhq?igsh=ZzUzZ3NpcjN3bDZy&utm_source=ig_contact_invite", icon: "/images/instagram.svg" },
    { top: "Professional Growth", main: "Connect on LinkedIn Network", link: "https://www.linkedin.com/company/getintern/", icon: "/images/linkedin.svg" }
  ];

  const runCycle = () => {
    // Step 1: Slide In
    setIsVisible(true);

    // Step 2: Stay for 5 seconds
    timeoutOutRef.current = setTimeout(() => {
      setIsVisible(false);
      
      // Step 3: Change content after exit animation (1.5s)
      timeoutNextRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % socialData.length);
      }, 1600); 

    }, 4500);
  };

  const clearAllTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutOutRef.current) clearTimeout(timeoutOutRef.current);
    if (timeoutNextRef.current) clearTimeout(timeoutNextRef.current);
  };

  const startAnimation = () => {
    clearAllTimers();
    runCycle();
    intervalRef.current = setInterval(runCycle, 7000);
  };

  useEffect(() => {
    // Start for the first time
    startAnimation();

    // Visibility Change Logic
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Tab band/inactive hai: Sab rok do
        setIsVisible(false);
        clearAllTimers();
      } else {
        // Tab wapas khuli: Shuru se start karo
        startAnimation();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearAllTimers();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div 
      className={`${styles.popupContainer} ${isVisible ? styles.popupActive : ""}`}
      onClick={() => window.open(socialData[currentIndex].link, "_blank") }
    >
      <div className={styles.iconWrapper}>
        <img src={socialData[currentIndex].icon} alt="social" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.topText}>{socialData[currentIndex].top}</p>
        <p className={styles.mainText}>{socialData[currentIndex].main}</p>
      </div>
    </div>
  );
};

export default SocialPopup;