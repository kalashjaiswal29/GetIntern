import styles from "../style/mainHero.module.css";
import { HashLink as Link } from "react-router-hash-link";

const FrontPageBtns = () => {
    const scrollwithoffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value to your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }
  return (
    <div className={styles.buttonGroup}>
      
      <Link to="/apply">
        <li className={`${styles.applyButton} ${styles.twobButtons}`}>
          Apply Now
        </li>
      
      </Link>
      <Link
        smooth to="#domainsSection"
        scroll={(el)=>{
              scrollwithoffset(el)
            }}>
        <li className={`${styles.viewButton} ${styles.twobButtons}`}>
          View Available Domains
        </li>
      </Link>
     
    </div>
  );
};

export default FrontPageBtns;
