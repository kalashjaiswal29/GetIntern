import styles from "../style/qualtiescommitment.module.css";

import QualtiesContainer from "./qualitiesContainer.jsx";
import CommitmentContainer from "./commitmentContainer.jsx";

const QualtiesCommitment = () => {
  return (
    <section  className={styles.secondcontainer}>
    <div className={styles.container}>
      <QualtiesContainer />
      <CommitmentContainer />
    </div>
    </section>
  );
};

export default QualtiesCommitment;
