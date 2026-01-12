import styles from "../style/msme.module.css"

const MSME = () => {
  return(
    <div className={styles.msmeContainer}>
      <a href="https://drive.google.com/file/d/1T1IyukIhSzOpSxhs5zILfuWCLaBmQGr2/view" target="_main" >
      <img src="/images/msme.webp" loading="lazy" alt="MSME" className={styles.imgMsme}/></a>
      <p className={styles.msmeText}>
        <span className={styles.p1}><i>Registered under </i></span>
        <span className={styles.p2}><i>MSME, Govt. of India</i></span>
      </p>
    </div>
  )
}
export default MSME