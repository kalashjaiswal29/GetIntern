import styles from "../style/domains.module.css";
import code from "../assets/code.png";
import cpu from "../assets/cpu.png";
import diagram from "../assets/diagram.png";
import cloud from "../assets/cloud.png";
import brain from "../assets/brain.png";
import terminal from "../assets/terminal.png";
import tool from "../assets/tool.png";
import megaPhone from "../assets/megaphone.png";
import shield from "../assets/shield.png";

const Domains = () => {
  const cardsContent = [
    {
      img: code,
      title: "Web Development",
    },
    {
      img: diagram,
      title: "Data Science",
    },
    {
      img: brain,
      title: "Machine Learning",
    },
    {
      img: shield,
      title: "Cybersecurity",
    },
    {
      img: megaPhone,
      title: "Digital Marketing",
    },
    {
      img: terminal,
      title: "Python Programming",
    },
    {
      img: tool,
      title: "UI/UX",
    },
    {
      img: cloud,
      title: "Cloud Computing",
    },
    {
      img: cpu,
      title: "VLSI",
    },
  ];

  return (
    <section className={styles.domainsSection}>
      <div className={styles.domainsContainer}>
        <h2 className={styles.domainsHeading}>
          <span className={styles.blue}>Available</span>{" "}
          <span className={styles.orange}>Domains</span>
        </h2>
        <p className={styles.domainsSubHead}>
          GetIntern gives you great flexibility to choose your domain.
        </p>
        <div className={styles.cardsContainer}>
          {cardsContent.map(({ img, title }) => {
            return (
              <li className={styles.card}>
                <div className={styles.iconCircle}>
                  <img className={styles.img} src={img} alt="icon" />
                </div>
                <h2 className={styles.cardTitle}>{title}</h2>
              </li>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Domains;
