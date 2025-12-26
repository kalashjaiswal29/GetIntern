import styles from "../style/footer.module.css";

import insta from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <p className={styles.footer1}>
          GetIntern<span className={styles.footertm}>™</span>
        </p>
        <span className={styles.footer2}>
          Building career foundations for students
        </span>
        <span className={styles.footer3}>
          <span>Home</span>
          <span>About Us</span>
          <span>Services</span>
          <span>Domains</span>
          <span>FAQs</span>
          
        </span>
        <span className={styles.footer4}>
          <span>
            Email -{" "}
            <span className={styles.footer4_5}>contact@getintern.ac.in</span>
          </span>
          <span>
            📞 +91 6006312288{"     "}|{"     "}+91 7905891176
          </span>
        </span>
        <div className={styles.icons}>
          <div className={styles.iconBorder}>
            <img src={facebook} alt="insta" className={styles.facebook} />
          </div>

          <div className={styles.iconBorder}>
            <img src={insta} alt="insta" className={styles.icon} />
          </div>
          <div className={styles.iconBorder}>
            <img src={twitter} alt="insta" className={styles.icon} />
          </div>
          <div className={styles.iconBorder}>
            <img src={linkedin} alt="insta" className={styles.icon} />
          </div>
        </div>
        <div className={styles.copyWright}>
          <p className={styles.line1}>
            <span>Copyright © 2025 GetIntern™.</span> <span className={styles.rights}>All rights reserved.</span>
          </p>
          <p className={styles.line2}>
            <i>Built with passion at GetIntern™</i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
