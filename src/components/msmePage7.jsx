import styles from "../style/msme.module.css"
import imgMsme from "../assets/msme.png"

const MSME = () => {
  return(
    <div className={styles.msmeContainer}>
      <img src={imgMsme} alt="MSME" className={styles.imgMsme}/>
      <p className={styles.msmeText}>
        <span className={styles.p1}><i>Registered under </i></span>
        <span className={styles.p2}><i>MSME, Govt. of India</i></span>
      </p>
    </div>
  )
}
export default MSME