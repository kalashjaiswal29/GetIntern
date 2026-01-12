import styles from "../style/apply_form.module.css";
import { useState, useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "./scrollTop.jsx";

const ApplyForm = () => {
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const [fetchStatus, setFetchStatus] = useState(false);
  const [zoomSrc, setZoomSrc] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDomain, setSelectedDomain] = useState("");

  const cardsContent = [
    "Web Development",
    "Data Science",
    "Machine Learning",
    "Cybersecurity",
    "Digital Marketing",
    "Python Programming",
    "UI/UX",
    "Cloud Computing",
    "VLSI",
  ];

  const durationOptions = [
    "2 weeks",
    "4 weeks (1 month)",
    "8 weeks (2 months)",
    "12 weeks (3 months)",
    "16 weeks (4 months)",
    "20 weeks (5 months)",
    "24 weeks (6 months)",
  ];

  const batchDates = [
    "20 Jan 2026",
    "28 Jan 2026",
    "5 Feb 2026",
    "12 Feb 2026",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    if (!selectedDomain) {
      toast.error("Please select an Internship Domain");
      return;
    }
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    formData.append("domain", selectedDomain);

    const toastId = toast.loading("Submitting your application...");
    setFetchStatus(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyrKTpbe0XlCEzkbcpMIEMQ9fBqk59ibqq2qGSaEgqaPfD2L6sr3VjN-bu4GA83LWbtnQ/exec",
        { method: "POST", mode: "no-cors", body: formData }
      );
      setFetchStatus(false);
      formElement.reset();
      setSelectedDomain("");
      toast.success("Application submitted successfully!", {
        id: toastId,
        duration: 3000,
        className: styles.myToast,
      });
      setTimeout(() => navigate("/"), 3000);
    } catch (err) {
      setFetchStatus(false);
      toast.error("❌ Submission failed. Please check connection.", {
        id: toastId,
        className: styles.myToast,
      });
    }
  };

  const openZoom = (src) => {
    setZoomSrc(src);
    document.body.style.overflow = "hidden";
  };
  const closeZoom = () => {
    setZoomSrc(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className={styles.applyContainer}>
      <ScrollToTop />
      <Toaster position="top-center" />
      <h1 className={styles.h1}>GetIntern - Internship Application Form</h1>
      <section className={styles.sectionCard}>
        <div className={styles.trustCards}>
          <div className={styles.trustCard}>
            <div className={styles.cardMedia}>
              <img
                src="/SAMPLE_OFFER_LETTER.webp"
                alt="Internship Offer Letter Sample"
                onClick={() => openZoom("/SAMPLE_OFFER_LETTER.webp")}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Offer Letter</h3>
              <p className={styles.cardDesc}>
                Issued after application approval
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.cardMedia}>
              <img
                src="/SAMPLE_CERTICATE.webp"
                alt="Internship Certificate Sample"
                onClick={() => openZoom("/SAMPLE_CERTICATE.webp")}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Completion Certificate</h3>
              <p className={styles.cardDesc}>
                Issued after successful internship completion
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.cardIcon}>🏠</div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>100% Remote</h3>
              <p className={styles.cardDesc}>
                Flexible, work-from-home internship
              </p>
            </div>
          </div>

          <div className={styles.trustCard}>
            <div className={styles.cardIcon}>⏳</div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>Flexible Duration</h3>
              <p className={styles.cardDesc}>
                Choose internship length as per your goals
              </p>
            </div>
          </div>
        </div>

        <div className={styles.intro}>
          <div>
            GetIntern is a student-first internship platform focused on
            practical learning through real-world tasks. We provide structured
            internships, mentor guidance when needed, and verified certificates
            upon completion.
          </div>
          <p>Transparent process (no hidden charges)</p>
          <p>Pay after internship completion</p>
          <p>Task-based learning, not fake internships</p>
          <p>Open for all students & freshers</p>
        </div>
        <h5 className={styles.intro} >
          Real-world, task-based internships designed to build industry-ready
          skills
        </h5>
        <p className={styles.intro}>
          Applications are reviewed manually. Selected candidates will receive
          tasks and onboarding details via email.
        </p>
    </section>
        
      
      <div className={styles.formWrapper}>
        <form onSubmit={handleApplySubmit} className={styles.applyForm}>
          <section className={styles.sectionCard}>
        
            <h3 className={styles.h3}>Personal Details</h3>
            <label className={styles.fieldLabel}>
              <div>Name</div>
              <input
                className={styles.input}
                type="text"
                name="name"
                required
              />
            </label>
            <label className={styles.fieldLabel}>
              <div>Email</div>
              <input
                className={styles.input}
                type="email"
                name="email"
                required
              />
            </label>
            <label className={styles.fieldLabel}>
              <div>Phone</div>
              <input
                className={styles.input}
                type="tel"
                name="phone"
                required
              />
            </label>
            <label className={styles.fieldLabel}>
              <div>College / University</div>
              <input
                className={styles.input}
                type="text"
                name="college"
                required
              />
            </label>
            <label className={styles.fieldLabel}>
              <div>Degree / Course</div>
              <input
                className={styles.input}
                type="text"
                name="degree"
                required
              />
            </label>
            <label className={styles.fieldLabel}>
              <div>Current Year of Study</div>
              <input
                className={styles.input}
                type="number"
                name="year"
                min="1"
                max="10"
                required
              />
            </label>
          </section>

          <section className={styles.sectionCard}>
            <h3 className={styles.h3}>Internship Details</h3>
            <div className={styles.fieldLabel}>
              <div>Choose your Domain</div>
              <div className={styles.customSelectContainer} ref={dropdownRef}>
                <div
                  className={`${styles.select} ${
                    isOpen ? styles.selectActive : ""
                  }`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span
                    className={!selectedDomain ? styles.placeholderText : ""}
                  >
                    {selectedDomain || "Select your domain..."}
                  </span>
                  <span
                    className={`${styles.arrow} ${
                      isOpen ? styles.arrowRotate : ""
                    }`}
                  ></span>
                </div>
                <ul
                  className={`${styles.optionsList} ${
                    isOpen ? styles.showOptions : ""
                  }`}
                >
                  {cardsContent.map((domain) => (
                    <li
                      key={domain}
                      className={styles.optionItem}
                      onClick={() => {
                        setSelectedDomain(domain);
                        setIsOpen(false);
                      }}
                    >
                      {domain}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <h3 className={styles.h3} style={{ marginTop: "20px" }}>
              Internship Duration
            </h3>
            <div className={styles.radioGroup}>
              {durationOptions.map((option) => (
                <label
                  key={option}
                  className={`${styles.pill} ${styles.durationPill}`}
                >
                  <input type="radio" name="duration" value={option} required />
                  <span className={styles.pillLabel}>{option}</span>
                </label>
              ))}
            </div>
          </section>

          <section className={styles.sectionCard}>
            <h3 className={styles.h3}>Upcoming Batches</h3>
            <div className={styles.radioGroup}>
              {batchDates.map((date) => (
                <label key={date} className={styles.pill}>
                  <input type="radio" name="batch_date" value={date} required />
                  <span className={styles.pillLabel}>{date}</span>
                </label>
              ))}
            </div>
          </section>

          <section className={styles.sectionCard}>
            <div className={styles.h3}>🔒 Payment Policy</div>
            <div className={styles.infoBox}>
              <div className={styles.note}>
                Internship fee is payable after internship completion <br />
                Payment is required before issuing certificates <br />
                No hidden charges at any stage <br />
                Registration fee is non-refundable
              </div>
            </div>
            <div className={styles.fieldLabel}>
              <h3 className={styles.h3}>Promo Code (optional)</h3>
              <p className={styles.note}>
                Apply promo code for instant discount (if applicable)
              </p>
              <input className={styles.input} type="text" name="promo_code" />
            </div>
          </section>

          <section className={styles.sectionCard}>
            <label className={styles.checkboxWrap}>
              <input type="checkbox" name="agree" required />
              <span>I understand and agree that I will receive:</span>
            </label>
            <p className={styles.note}>
              Offer Letter <br /> Internship Tasks & Learning Content <br />{" "}
              Mentor Support (if needed) <br /> Completion Certificate after
              successful completion
            </p>
          </section>

          <section className={styles.sectionCard}>
            <p className={styles.note}>
              GetIntern does not promise guaranteed jobs. Our internships focus
              on skill-building and real-world experience.
            </p>
            <label className={styles.checkboxWrap}>
              <input type="checkbox" name="terms" required />
              <span>
                I confirm that all details provided are correct and I agree to
                GetIntern’s internship process.
              </span>
            </label>
          </section>

          <button
            className={!fetchStatus ? styles.submitButton : styles.hideBtn}
            type="submit"
          >
            Submit Application
          </button>
        </form>
      </div>

      {zoomSrc && (
        <div
          className={`${styles.zoomOverlay} ${styles.show}`}
          onClick={closeZoom}
        >
          <div
            className={styles.zoomImage}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={zoomSrc} alt="Zoom Preview" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplyForm;
