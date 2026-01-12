import styles from "../style/services.module.css";

const Services = () => {
  const cardsContent = [
    {
      icon: "/images/webd.svg",
      heading: "Web Development",
      subHead: "Modern, fast, responsive websites.",
      iconClass: styles.icon, // Rename kiya taaki confusion na ho
    },
    {
      icon: "/images/appd.svg",
      heading: "App Development",
      subHead: "Build custom Android & web apps.",
      iconClass: styles.appIcon,
    },
  ];

  const getMailtoLink = (title) => {
    const email = "contact@getintern.in";
    const subject = encodeURIComponent(`Interested in ${title} Service`);
    const body = encodeURIComponent(`Hi GetIntern,\n\nI am interested in your ${title} services. Please contact me.\n\nThanks!`);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className={styles.servicesContainer}> {/* CSS ke hisab se rename kiya */}
      <h2 className={styles.heading}>
        <span >Our Services</span>
      </h2>
      
      <div className={styles.cardsContainer}>
        {cardsContent.map(({ icon, heading, subHead, iconClass }) => {
          return (
            <a 
              href={getMailtoLink(heading)} 
              key={heading} 
              className={styles.cardLink}
            >
              <div className={styles.card}>
                {/* Left Side: Icon Box */}
                <div className={styles.iconBox}>
                  <img
                    className={iconClass} // styles.icon ya styles.appIcon yahan aayega
                    src={icon}
                    alt={heading}
                    loading="lazy"
                  />
                </div>

                {/* Right Side: Content */}
                <div className={styles.cardContent}>
                  <h2 className={styles.cardHead}>{heading}</h2>
                  <p className={styles.cardSubHead}>{subHead}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Services;