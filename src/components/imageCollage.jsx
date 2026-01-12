import styles from "../style/mainHero.module.css";
const ImageCollage = () => {
  return (
    <div className={styles.grid}>
      <img
        src="/images/mentorMentee.webp"
        loading="lazy"
        className={styles.mentorMentee}
        alt="mentorMentee"
      />

      <img
        src="/images/graduateGirlwithCap.webp"
        loading="lazy"
        className={styles.graduateGirlwithCap}
        alt="graduateGirlwithCap"
      />
      <img
        src="/images/employeeMentee.webp"
        loading="lazy"
        className={styles.employeeMentee}
        alt="employeeMentee"
      />
    </div>
  );
};

export default ImageCollage;
