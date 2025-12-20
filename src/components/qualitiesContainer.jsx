import styles from "../style/qualtiescommitment.module.css";

import clipboard from "../assets/clipboard.png";
import badge from "../assets/badge.png";
import thumbsUp from "../assets/thumbs-up.png";
import wifi from "../assets/wifi.png";

const QualtiesContainer = () => {
  return (
    <div className={styles.qualitiesContainer}>
      <div className={styles.qualityItem}>
        <div className={styles.orangeCircle}>
          <img
            src={clipboard}
            className={`${styles.icons} ${styles.tasks}`}
            alt="tasks"
          />
        </div>
        <h3 className={styles.qualityHead}>Practical Projects</h3>
        <p className={styles.qualitySubHead}>
          Work on real tasks designed <br /> for beginners
        </p>
      </div>
      <div className={styles.qualityItem}>
        <div className={styles.orangeCircle}>
          {" "}
          <img src={wifi} className={styles.icons} alt="tasks" />
        </div>
        <h3 className={styles.qualityHead}>Flexible & Online</h3>
        <p className={styles.qualitySubHead}>
          Work from home, no fixed <br />
          time
        </p>
      </div>
      <div className={styles.qualityItem}>
        <div className={styles.orangeCircle}>
          {" "}
          <img src={badge} className={styles.icons} alt="tasks" />
        </div>
        <h3 className={styles.qualityHead}>Certificate Provided</h3>
        <p className={styles.qualitySubHead}>
          Verified internship certificate <br />
          provided on completion
        </p>
      </div>
      <div className={styles.qualityItem}>
        <div className={styles.orangeCircle}>
          {" "}
          <img src={thumbsUp} className={styles.icons} alt="tasks" />
        </div>
        <h3 className={styles.qualityHead}>Beginner Friendly</h3>
        <p className={styles.qualitySubHead}>
          No coding experience for most <br />
          domains
        </p>
      </div>
    </div>
  );
};

export default QualtiesContainer;
