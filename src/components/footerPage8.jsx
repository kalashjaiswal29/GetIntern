import styles from "../style/footer.module.css";
import { HashLink as Link } from "react-router-hash-link";



const Footer = () => {
  const footerLinks = [
    { label: "Home", target: "/#heroSection" },
    { label: "About Us", target: "/#aboutSection" },
    { label: "Services", target: "/#servicesSection" },
    { label: "Domains", target: "/#domainsSection" },
    { label: "Apply Now", target: "/apply" },
  ];
    const scrollwithoffset = (el) => {
    setTimeout(()=>{
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value to your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    },5)
  }
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerContainer}>
        <p className={styles.footer1}>
          GetIntern<span className={styles.footertm}>™</span>
        </p>
        <span className={styles.footer2}>
          Building career foundations for students
        </span>
        <ul style={{listStyle:"none"}} className={styles.footer3}>
          {footerLinks.map(link=>{
             
            return(  <Link smooth
                        key={link.label}
                        to={link.target}
                        duration ={1000}
                        scroll={
                          scrollwithoffset}
                      >
                       <li>{link.label}</li>
                      </Link>)
          })}
          
        </ul>
        <span className={styles.footer4}>
          <span>
            Email -{" "}
            <a
              href="mailto:contact@getintern.in"
              className={styles.footer4_5}
            >
              contact@getintern.in
            </a>
          </span>
          <span className={styles.call}>
            <span>
              📞 <a href="tel:+916006312288">+91 6006312288</a>
            </span>
            <span className={styles.divider}>|</span>
            <span>
              📞 <a href="tel:+917905891176">+91 7905891176</a>
            </span>
          </span>
        </span>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/profile.php?id=61586402463502&mibextid=rS40aB7S9Ucbxw6v" target="_main">
          <div className={styles.iconBorder}>
            <img
              src="/images/facebook.svg"
              alt="insta"
              className={styles.facebook}
            />
          </div>
          </a>
    <a href="https://www.instagram.com/getinternhq?igsh=ZzUzZ3NpcjN3bDZy&utm_source=ig_contact_invite" target="_main">
          <div className={styles.iconBorder}>
            <img
              src="/images/instagram.svg"
              alt="insta"
              loading="lazy"
              className={styles.icon}
            />
            
          </div>
          </a>
          
          <a href="https://www.linkedin.com/company/getintern/"  target="_main">
          <div className={styles.iconBorder}>
            <img
              src="/images/linkedin.svg"
              alt="insta"
              loading="lazy"
              className={styles.icon}
            />
          </div>
          </a>
          <a href="https://whatsapp.com/channel/0029Vb7Lp7f90x2w8MBlPV44"  target="_main">
          <div className={styles.iconBorder}>
            <img
              src="/images/whatsapp.svg"
              alt="insta"
              loading="lazy"
              className={styles.icon}
            />
          </div>
          </a>  
        </div>
        <div className={styles.copyWright}>
          <p className={styles.line1}>
            <span>Copyright © 2026 GetIntern™.</span>{" "}
            <span className={styles.rights}>All rights reserved.</span>
          </p>
          <p className={styles.line2}>
            <i>Built with passion at GetIntern™</i>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
