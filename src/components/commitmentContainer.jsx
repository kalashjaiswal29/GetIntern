import styles from "../style/qualtiescommitment.module.css";

import CommitmentBoxes from "./commitmentBoxes.jsx";

const CommitmentContainer = () => {
  return (
    <>
      <h2 className={styles.commitmentHead}>Our Commitment to Students</h2>
      <pre className={styles.commitmentSubHead}>
        {" "}
        We ensure transparent, reliable, and growth-focused internships for
        every learner.
      </pre>
      <CommitmentBoxes />
      <img
        src="/images/triangularIMG.webp"
        className={styles.triangularIMG}
        loading="lazy"
        alt="Triangular"
      />
    </>
  );
};

export default CommitmentContainer;
