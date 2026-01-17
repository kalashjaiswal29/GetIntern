import styles from "../style/domains.module.css";
import {Link} from "react-router-dom"
const Domains = () => {
  const cardsContent = [
    {
      img: "/images/code.svg",
      title: "Web Development",
    },
    {
      img: "/images/diagram.svg",
      title: "Data Science",
    },
    {
      img: "/images/brain.svg",
      title: "Machine Learning",
    },
    {
      img: "/images/shield.svg",
      title: "Cybersecurity",
    },
    {
      img: "/images/megaphone.svg",
      title: "Digital Marketing",
    },
    {
      img: "/images/terminal.svg",
      title: "Python Programming",
    },
    {
      img: "/images/tool.svg",
      title: "UI/UX",
    },
    {
      img: "/images/cloud.svg",
      title: "Cloud Computing",
    },
    {
      img: "/images/cpu.svg",
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
             
              <Link to="/apply">
              <li className={styles.card} key={title}>
                <div className={styles.iconCircle}>
                  <img
                    className={styles.img}
                    src={img}
                    alt="icon"
                    loading="lazy"
                  />
                </div>
                <h2 className={styles.cardTitle}>{title}</h2>
              </li>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Domains;
