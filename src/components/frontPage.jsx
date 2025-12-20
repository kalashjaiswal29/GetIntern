import styles from "../style/mainHero.module.css";
import FrontPageBtns from "./frontPageButtons";
import FrontPageText from "./frontPageText";

import cap1 from "../assets/cap 1.png";
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
        <img src={cap1} className={styles.cap} alt="capPNG" />
      </div>
    </div>
  );
};

export default FrontPage;
