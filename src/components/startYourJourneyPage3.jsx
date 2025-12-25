import styles from "../style/startJourney.module.css";

const StartYourJourney = () => {
  const step = [
    {
      no: 1,
      title: "Apply Online",
      subHead: "Fill a simple form to start your internship process.",
    },
    {
      no: 2,
      title: "Receive Welcome Email",
      subHead: "You will receive onboarding instructions + your tasks.  ",
    },
    {
      no: 3,
      title: "Complete 3-5 Tasks",
      subHead: "Work on practical tasks at your own pace.",
    },
    {
      no: 4,
      title: "Get Certificate",
      subHead: "Receive your verified certificate via email",
    },
  ];

  return (
    <div className={styles.startYJContainer}>
      <h1 className={styles.startHead}>Start Your Journey</h1>
      <div className={styles.stepsContainer}>
        {step.map(({ no, title, subHead }) => {
          return (<li className={styles.stepBox} key={no}>
            <div className={styles.stepCircle}>{no}</div>
            <h3 className={styles.stepTitle}>{title}</h3>
            <p className={styles.stepSubHead}>{subHead}</p>
          </li>);
        })}
      </div>
      <div className={styles.dividerLine}>
      </div>
    </div>
  );
};

export default StartYourJourney;
