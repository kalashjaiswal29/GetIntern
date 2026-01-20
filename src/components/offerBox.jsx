import React, { useState, useEffect } from "react";
import styles from "../style/offerBox.module.css";
import {Link} from "react-router-dom"

const OfferBox = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={styles.offerContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.limitedBadge}>Founding Intern</div>
        <p className={styles.mainText}>
          🎉 <span className={styles.highlight}>Exclusive Offer:</span> 
          This program is <span className={styles.freeText}>FREE</span> for the first 100 students. <Link to="/apply" style={{color:"#fe8409"}}><u>Apply Now</u></Link>
        </p>
        
      </div>
    </div>
  );
};

export default OfferBox;

