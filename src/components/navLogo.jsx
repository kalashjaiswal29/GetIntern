import styles from "../style/NavBar.module.css"


const NavLogo = () => {
  return (
    <div className={styles.logo}>
      {/* <p> */}
      <span className={styles.name}>GetIntern</span>
      <span className={styles.tm}>™</span>
      {/* </p> */}
     </div>
  )
}

export default NavLogo ;