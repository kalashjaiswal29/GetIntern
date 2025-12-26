import styles from "../style/services.module.css";
import webd from "../assets/webd.png";
import appd from "../assets/appd.png";

const Services = () => {
  const cards = [
    {
      icon: webd,
      heading: "Web Development",
      subHead: "Modern, fast, responsive sites.",
      className: styles.icon
    },
    {
      icon: appd,
      heading: "App Development",
      subHead: "Build custom Android & web apps.",
      className: styles.appIcon
    },
  ];
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.heading}>Our Services</h1>
      <div className={styles.cardsContainer}>
        {cards.map(({ icon, heading, subHead,className }) => {
          return (
            <li className={styles.card} key={heading} >
              <div className={styles.iconBox}>
                <img src={icon} className={className} alt={icon} />
              </div>
              <div className={styles.cardContent}>
                <h2 className={styles.cardHead}>{heading}</h2>
                <p className={styles.cardSubHead}>
                  {subHead}
                </p>
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};
export default Services;