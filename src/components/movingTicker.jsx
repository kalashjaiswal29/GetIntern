import React from "react";
import styles from "../style/MovingTicker.module.css";

const MovingTicker = () => {
  // Content jo website ke hisab se best hai
  const tickerItems = [
    { text: "Founding Intern Program", highlight: "FREE for first 100 students" },
    { text: "New Domains Open", highlight: "Web Dev, AI/ML, UI/UX" },
    { text: "Get Certified", highlight: "Industry Verified Certificates" },
    { text: "Winter Batch", highlight: "Apply Now - Limited Slots" }
  ];

  // Ek hi line mein repeat karne ke liye
  const renderText = () => (
    <div className={styles.tickerGroup}>
      {tickerItems.map((item, index) => (
        <span key={index} className={styles.itemWrapper}>
          <span className={styles.mainTitle}>{item.text}:</span>
          <span className={styles.highlightText}>{item.highlight}</span>
          <span className={styles.separator}>|</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className={styles.tickerContainer}>
      <div className={styles.tickerTrack}>
        {renderText()}
        {renderText()} {/* Double rendering for seamless loop */}
      </div>
    </div>
  );
};

export default MovingTicker;