import styles from "../style/mainHero.module.css";
import graduateGirlwithCap from "../assets/graduateGirlwithCap.jpg";
import employeeMentee from "../assets/employeeMentee.jpg";
import mentorMentee from "../assets/mentorMentee.jpg";

const ImageCollage = () => {
  return (
    <div className={styles.grid}>
      <img
        src={mentorMentee}
        className={styles.mentorMentee}
        alt="mentorMentee"
      />

      <img
        src={graduateGirlwithCap}
        className={styles.graduateGirlwithCap}
        alt="graduateGirlwithCap"
      />
      <img
        src={employeeMentee}
        className={styles.employeeMentee}
        alt="employeeMentee"
      />
    </div>
  );
};

export default ImageCollage;
