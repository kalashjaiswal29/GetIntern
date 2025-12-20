import styles from "../style/mainHero.module.css";

const FrontPageText = () => {
  return (
    <>
      <span className={styles.mainHead}>
        Get Internships That Build <br />
        Your Future
      </span>
      <p>
        <span className={styles.withText}> with </span>
        <span className={styles.brandText}>GetIntern</span>
      </p>
      <p className={styles.subText}>
        GetIntern empowers students with hands-on virtual and real internships
        that build skills, provide real-world experience, and support meaningful
        career growth.
      </p>
    </>
  );
};

export default FrontPageText;
