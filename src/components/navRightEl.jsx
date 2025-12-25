import styles from "../style/NavBar.module.css";

const NavRightEl = ({ handleNavClick }) => {
  let navRight = ["Home", "Internships", "Services", "About Us", "Contact Us"];

  return (
    <div className={styles.navRight}>
      {navRight.map((item) => {
        return (
          <li
            className={styles.li}
            key={item}
            onClick={() => {
              handleNavClick(item);
            }}
          >
            {item}
          </li>
        );
      })}
    </div>
  );
};

export default NavRightEl;
