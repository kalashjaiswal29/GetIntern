import styles from "../style/mainHero.module.css";
import { HashLink as Link } from "react-router-hash-link";

const FrontPageBtns = () => {
  return (
    <div className={styles.buttonGroup}>
      <Link to="/apply">
        <li className={`${styles.applyButton} ${styles.twobButtons}`}>
          Apply Now
        </li>
      
      </Link>
      <Link
        smooth to="#domainsSection"
        spy={true}
        // smooth="easeInOutQuint"
        duration={1000}
      >
        <li className={`${styles.viewButton} ${styles.twobButtons}`}>
          View Available Domains
        </li>
      </Link>
    </div>
  );
};

export default FrontPageBtns;
