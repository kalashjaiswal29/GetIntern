import styles from "../style/NavBar.module.css";
import {HashLink as Link} from "react-router-hash-link"

const NavLogo = () => {
    const scrollwithoffset = (el) => {
    setTimeout(()=>{
      const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value to your navbar height
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    },5)
  }
  return (
    <>
    <Link smooth to="/#heroSection" scroll={
              scrollwithoffset}
          >
    
      <div className={styles.logo}>
        {/* <p> */}<span><img style={{height:"2.4rem"}} src="/GI_Logo.svg" alt="logoM" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.name}>GetIntern</span>
        <span className={styles.tm}>™</span>
        {/* </p> */}
      </div>
      <div className={styles.logoM}>
        <img src="/GI_Logo.svg" alt="logoM" />
      </div>
    </Link>
    </>
  );
};

export default NavLogo;
