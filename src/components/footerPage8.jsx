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
      <pre className={styles.footer3}>Home{"          "}About Us{"          "}Services{"          "}Domains{"          "}FAQs</pre>
      <p className={styles.footer4}>
        Email -{" "}
        <span className={styles.footer4_5}>contact@getintern.ac.in</span>{"        "}📞 +91
        6006312288{"     "}|{"     "}+91 7905891176
      </p>
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
          <p className={styles.line1} >Copyright © 2025 GetIntern™. All rights reserved.</p>
          <p className={styles.line2}><i>Built with passion at GetIntern™</i></p>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
