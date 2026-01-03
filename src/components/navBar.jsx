import styles from "../style/NavBar.module.css";
import NavLogo from "./navLogo";
import NavRightEl from "./navRightEl";
import { useState ,useEffect} from "react";

const NavBar = () => {

  const [hamMenu, setHamMenu] = useState(false);
const toggleHamMenu = () => {
  setHamMenu((prev) => !prev);
};

// useEffect(() => {
//   console.log("Hamburger Menu is now: ", hamMenu);
// }, [hamMenu]);

  return (
    <div className={styles.nav}>
      <div className={styles.navBar}>
        <NavLogo />
        <NavRightEl toggleHamMenu={toggleHamMenu} hamMenu={hamMenu} />
      </div>
      <div className={styles.navLine}></div>
    </div>
  );
};

export default NavBar;
