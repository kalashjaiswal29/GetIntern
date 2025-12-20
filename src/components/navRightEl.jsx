import styles from "../style/NavBar.module.css";
import React from "react";
import { useState } from "react";

const NavRightEl = () => {
  let navRight = ["Home", "Internships", "Services", "About Us", "Contact Us"];
  const [menu,setMenu] = useState(false)
  return (
    <div className={styles.navRight}>
      {navRight.map((item) => {
        return <li className={!menu ? styles.li : styles.menu} key={item}>{item}</li>;
      })}
    </div>
  );
};

export default NavRightEl;
