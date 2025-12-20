import styles from "../style/aboutUs.module.css";
import img from "../assets/im.avif";

const AboutUS = () => {
  return (
    <section className={styles.aboutsection}>
      <div className={styles.aboutContainer}>
        <div className={styles.leftConatiner}>
          <h1 className={styles.heading}>About us</h1>
          <h5 className={styles.firstSubHead}>
            GetIntern™ is an MSME-registered virtual internship provider
            offering beginner-friendly internships for college students.
          </h5>
          <p className={styles.subHead}>
            We focus on practical learning through real tasks, guided exposure,
            and essential skill development.
          </p>
          <p className={styles.subHead}>
            Our mission is to help students build a strong career foundation
            with hands-on project experience, industry-relevant skill building,
            verified certificates, and a supportive, beginner-friendly
            environment.
          </p>
        </div>
        <img className={styles.img} src={img} alt="girlWithLaptop" />
      </div>
    </section>
  );
};

export default AboutUS;
