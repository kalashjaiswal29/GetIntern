import styles from "../style/NavBar.module.css";

const NavLogo = () => {
  return (
    <>
      <div className={styles.logo}>
        {/* <p> */}<span><img style={{height:"2.4rem"}} src="/GI_Logo.png" alt="logoM" /></span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span className={styles.name}>GetIntern</span>
        <span className={styles.tm}>™</span>
        {/* </p> */}
      </div>
      <div className={styles.logoM}>
        <img src="/GI_Logo.png" alt="logoM" />
      </div>
    </>
  );
};

export default NavLogo;
