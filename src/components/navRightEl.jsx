import styles from "../style/NavBar.module.css";
import { Link } from "react-scroll";
import menuIcon from '../assets/menus.png';
import crossIcon from '../assets/close.png';

const NavRightEl = ({ toggleHamMenu, hamMenu }) => {
  let navLinks = [
    { label: "Home", target: "heroSection" },
    { label: "Internships", target: "domainsSection" },
    { label: "Services", target: "servicesSection" },
    { label: "About Us", target: "aboutSection" },
    { label: "Contact Us", target: "footerSection" },
  ];

  return (
    <>
      {/* 1. Desktop Menu (Visible only on Large Screens) */}
      <div className={styles.navRight1}>
        {navLinks.map((item) => (
          <Link
            key={item.label}
            activeClass={styles.activeLi}
            to={item.target}
            spy={true}
            smooth="easeInOutQuint"
            duration={1000}
            offset={-70}
          >
            <li className={styles.li}>{item.label}</li>
          </Link>
        ))}
      </div>

      {/* 2. Mobile Dropdown Menu (Animate from Top) */}
      <div className={`${styles.navRightHam} ${hamMenu ? styles.navOpen : ''}`}>
        {navLinks.map((item) => (
          <Link
            key={item.label + "-mob"}
            to={item.target}
            spy={true}
            smooth={true}
            duration={800}
            onClick={toggleHamMenu} // Click karne par menu band ho jaye
          >
            <li className={styles.li}>{item.label}</li>
          </Link>
        ))}
      </div>

      {/* 3. Hamburger Icon */}
      <div className={styles.navRight2} onClick={toggleHamMenu}>
        <img src={menuIcon} alt="menu" className={!hamMenu ? styles.menuActiveImg : styles.menuDeactiveImg} />
        <img src={crossIcon} alt="menu" className={!hamMenu ? styles.crossActiveImg : styles.crossDeactiveImg} />
      </div>
    </>
  );
};

export default NavRightEl;