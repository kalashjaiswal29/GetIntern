import styles from "../style/mainHero.module.css";
import FrontPageBtns from "./frontPageButtons";
import FrontPageText from "./frontPageText";
import ImageCollage from "./imageCollage";

const FrontPage = () => {
  return (
    <div className={styles.mainHero}>
      <div className={styles.textMain}>
        <FrontPageText />
        <FrontPageBtns />
      </div>
      <div className={styles.imageCollage}>
        <ImageCollage />
        <img src="/images/cap 1.png" className={styles.cap} loading="lazy" alt="capPNG" />
      </div>
    </div>
  );
};

export default FrontPage;
