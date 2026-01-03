import styles from "../style/NavBar.module.css";
import { Link } from "react-scroll";
import menuIcon from '../assets/menus.png';

const NavRightEl = () => {
  let navRight = [
    { label: "Home", target: "heroSection" },
    { label: "Internships", target: "domainsSection" },
    { label: "Services", target: "servicesSection" },
    { label: "About Us", target: "aboutSection" },
    { label: "Contact Us", target: "footerSection" },
  ];

  return (
    <>
    <div className={styles.navRight1}>
      {navRight.map((item) => {
        return (
          <Link
            activeClass={styles.activeLi}
            to={item.target}
            spy={true}
            smooth="easeInOutQuint"
            duration={1000}
            offset={-300} //89.59
          >
            <li key={item.label} className={styles.li}>
              {item.label}
            </li>
          </Link>
        );
      })}
    </div>
    <div>
      <img src={menuIcon}  alt="menu" className={styles.navRight2} />
    </div>
    </>
  );
};

export default NavRightEl;
