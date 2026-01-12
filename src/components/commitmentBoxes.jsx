import styles from "../style/qualtiescommitment.module.css";

const CommitmentBoxes = () => {
  return (
    <div className={styles.boxContainer}>
      <div className={styles.commitmentBox}>
        <div className={styles.commitBoxIcons}>
          <img
            src="/images/addFriend.svg"
            alt="icon"
            className={styles.commitBoxIcon}
          />
        </div>
        <div>
          <h4 className={styles.commitBoxHead}>
            Real Guidance, No Misleading Information
          </h4>
          <p className={styles.commitBoxSubHead}>
            We provide genuine mentorship from experienced professionals — no
            confusing or fake information.
          </p>
        </div>
      </div>

      <div className={styles.commitmentBox}>
        <div className={styles.commitBoxIcons}>
          <img
            src="/images/verify.svg"
            alt="icon"
            className={styles.commitBoxIcon}
          />
        </div>
        <div>
          <h4 className={styles.commitBoxHead}>
            Verified Certificates With Unique ID
          </h4>
          <p className={styles.commitBoxSubHead}>
            Every certificate we issue includes a digital verification ID to
            ensure authenticity and trust.
          </p>
        </div>
      </div>

      <div className={styles.commitmentBox}>
        <div className={styles.commitBoxIcons}>
          <img
            src="/images/unprotected.svg"
            alt="icon"
            loading="lazy"
            className={styles.commitBoxIcon}
          />
        </div>
        <div>
          <h4 className={styles.commitBoxHead}>
            No Fake Partnerships or Job Claims
          </h4>
          <p className={styles.commitBoxSubHead}>
            We maintain complete transparency: no fake companies, no false job
            offers, no unrealistic expectations
          </p>
        </div>
      </div>

      <div className={styles.commitmentBox}>
        <div className={styles.commitBoxIcons}>
          <img
            src="/images/check.svg"
            alt="icon"
            loading="lazy"
            className={styles.commitBoxIcon}
          />
        </div>
        <div>
          <h4 className={styles.commitBoxHead}>
            Practical, Trusted Internship Process
          </h4>
          <p className={styles.commitBoxSubHead}>
            You work on real tasks, receive real evaluation, and get a genuine
            internship experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommitmentBoxes;
