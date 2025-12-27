import { useEffect, useState } from "react";
import styles from "../style/mainHero.module.css";

const FrontPageText = () => {
  const [isNarrow, setIsNarrow] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 432 : false
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 432) {
        setIsNarrow(true);
      } else {
        setIsNarrow(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <span className={styles.mainHead}>
        {isNarrow ? (
          // 345px ya usse kam: single line (no <br>)
          "Get Internships That Build Your Future"
        ) : (
          // normal / bigger screens: manual line break
          <>
            Get Internships That Build <br />
            Your Future
          </>
        )}
      </span>

      <p>
        <span className={styles.withText}>with </span>
        <span className={styles.brandText}>GetIntern</span>
      </p>

      <p className={styles.subText}>
        GetIntern empowers students with hands-on virtual and real internships
        that build skills, provide real-world experience, and support meaningful
        career growth.
      </p>
    </>
  );
};

export default FrontPageText;
