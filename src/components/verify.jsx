import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import styles from "../style/verify.module.css";
import ScrollToTop from "./scrollTop"

const Verify = () => {
  const [result, setResult] = useState(null);
  const [verifyDone, setVerifyDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [backHome, setBackHome] = useState(false);
  const [animationData, setAnimationData] = useState(null);

// Page load hote hi JSON fetch karein (but bundle mein nahi jayega)
useEffect(() => {
  fetch("/verifyloader.json")
    .then((response) => response.json())
    .then((data) => setAnimationData(data));
}, []);
  const handleVerifySubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setVerifyDone(false);
    setResult(null);
    setLoading(true);

    const formData = new FormData(e.target);
    const verifyID = formData.get("verifyID").trim();

    // --- TIMEOUT LOGIC START ---
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000); // 12 seconds limit
    // --- TIMEOUT LOGIC END ---

    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbznsytIop8AwReveTJ8PZrdzSiluUTGcqAfDg5NySVVwpF4PxQYk7RW3sA7EB00209h_w/exec?id=${verifyID}`,
        { 
          method: "GET",
          signal: controller.signal,
          // ✅ REDIRECT FOLLOW: Ye Google Apps Script ke CORS bypass ke liye mandatory hai
          redirect: "follow" 
        }
      );

      // Backend (Apps Script) humne JSON-ready banaya hai, toh response.json() chalega
      const data = await response.json(); 
      
      clearTimeout(timeoutId); 
      setBackHome(false);
      setResult(data);
      setVerifyDone(true);
    } catch (error) {
      if (error.name === "AbortError") {
        setBackHome(true);
        setResult({
          success: false,
          message: "Request timed out. Slow internet or server busy.",
        });
      } else {
        setBackHome(true);
        setResult({
          success: false,
          message: "Network error or CORS block. Check deployment.",
        });
      }
      setVerifyDone(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.verifyContainer}>
      <ScrollToTop/>


      <center>
        <h1 className={styles.verifyHeading}>Verification</h1>
        <div className={styles.enterid}>Enter Your Certificate ID:</div>
        <form onSubmit={handleVerifySubmit}>
          <div className={styles.formDiv}>
            <input
              type="text"
              className={styles.verifyInput}
              placeholder="GI-WD-2026-0001"
              name="verifyID"
              maxLength={20}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={styles.verifyBtn}
              aria-label="Search Button"
            >
              <img src="/images/search.svg" alt="search" />
            </button>
          </div>

          {loading && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{ width: "90%", maxWidth: "400px", marginTop: "15px" }}
              >
                <Lottie animationData={animationData} loop={true} />
              </div>
              <p className={styles.verifying}>Verifying with Database...</p>
            </div>
          )}
        </form>

        {verifyDone && result && (
          <div style={{ marginTop: "20px" }}>
            {result.success ? (
              /* --- SUCCESS CARD --- */
              <div className={styles.resultCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.statusBadge}>
                    GetIntern Verified
                    <span className={styles.checkIcon}>✓</span>
                  </div>
                  <h3 className={styles.successTitle}>Verification Successful</h3>
                  <p className={styles.idLabel}>ID: {result.certificate.id || "N/A"}</p>
                </div>

                <div className={styles.infoGrid}>
                  {Object.entries(result.certificate).map(
                    ([key, value]) =>
                      key !== "id" && (
                        <div key={key} className={styles.infoBox}>
                          <span className={styles.infoLabel}>{key.replace(/_/g, " ")}</span>
                          <span className={styles.infoValue}>{value}</span>
                        </div>
                      )
                  )}
                </div>

                <div className={styles.cardFooter}>
                  <Link to="/">
                    <button className={styles.homeBtn} aria-label="Return to Home">
                      <span>← </span>Back To Home
                    </button>
                  </Link>
                </div>
              </div>
            ) : (
              /* --- FAILURE CARD --- */
              <div style={{ color: "red" }}>
                <p>❌ {result.message}</p>
                <p style={{ marginTop: "0.8rem" }}>
                  Facing issues?{" "}
                  <Link
                    to="https://wa.me/6006312288"
                    target="_main"
                    className={styles.chat}
                  >
                    &nbsp;&nbsp;
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="rgb(35, 217, 35)"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    &nbsp; Chat on WhatsApp
                  </Link>
                </p>
                <div>
                  <Link to="/">
                    <button className={styles.homeBtn} aria-label="Back to Home">
                      <span>← </span>Back To Home
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}
      </center>
    </div>
  );
};

export default Verify;