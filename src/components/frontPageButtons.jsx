import styles from "../style/mainHero.module.css";

const FrontPageBtns = () => {
  return (
    <div className={styles.buttonGroup}>
      <li className={`${styles.applybutton} ${styles.twobButtons}`}>
        Apply now
      </li>
      <li className={`${styles.viewButton} ${styles.twobButtons}`}>
        View Available Domains
      </li>
    </div>
  ); 
};

export default FrontPageBtns;
