import styles from "../style/NavBar.module.css";
import { HashLink as Link } from "react-router-hash-link";

const NavRightEl = ({ toggleHamMenu, hamMenu }) => {
  let navLinks = [
    { label: "Home", target: "#heroSection" },
    { label: "Internships", target: "#domainsSection" },
    { label: "Services", target: "#servicesSection" },
    { label: "Verify", target: "/verification" },
    { label: "Apply Now", target: "/apply" },
  ];
  
  return (
    <>
      {/* 1. Desktop Menu (Visible only on Large Screens) */}
      <div className={styles.navRight1}>
        {navLinks.map((item) => (
          <Link smooth
            key={item.label}
            activeClass={styles.activeLi}
            to={item.target}
            spy={true}
           
            duration={1000}
            offset={-70}
          >
            <li className={styles.li}>{item.label}</li>
          </Link>
        ))}
      </div>

      {/* 2. Mobile Dropdown Menu (Animate from Top) */}
      <div className={`${styles.navRightHam} ${hamMenu ? styles.navOpen : ""}`}>
        {navLinks.map((item) => (
          <Link smooth
            key={item.label + "-mob"}
            to={item.target}
            spy={true}
            
            duration={800}
            onClick={toggleHamMenu} // Click karne par menu band ho jaye
          >
            <li className={styles.li}>{item.label}</li>
          </Link>
        ))}
      </div>

      {/* 3. Hamburger Icon */}
      <div className={styles.navRight2} onClick={toggleHamMenu}>
        <img
          src="/images/menus.svg"
          loading="lazy"
          alt="menu"
          className={!hamMenu ? styles.menuActiveImg : styles.menuDeactiveImg}
        />
        <img
          src="/images/close.svg"
          loading="lazy"
          alt="menu"
          className={!hamMenu ? styles.crossActiveImg : styles.crossDeactiveImg}
        />
      </div>
    </>
  );
};

export default NavRightEl;
