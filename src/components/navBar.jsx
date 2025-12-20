import styles from "../style/NavBar.module.css";
import NavLogo from "./navLogo";
import NavRightEl from "./navRightEl";

const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.navBar}>
        <NavLogo />
        <NavRightEl />
      </div>
      <div className={styles.navLine}></div>
    </div>
  );
};

export default NavBar;
