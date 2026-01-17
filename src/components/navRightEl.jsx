import styles from "../style/NavBar.module.css";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const NavRightEl = () => {
  const location = useLocation();
  const [activeSec, setActiveSec] = useState("heroSection");
  const lastActiveRef = useRef("heroSection");
  const [hamMenu, setHamMenu] = useState(false);

  const toggleHamMenu = () => {
    setHamMenu((prev) => !prev);
  };

  // Scroll logic to detect sections without lagging
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSec(""); 
      return;
    }

    const sectionIds = ["heroSection", "commitmentSection", "stepsSection", "domainsSection", "servicesSection"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let id = entry.target.id;
            if (id === "heroSection" || id === "commitmentSection" || id === "stepsSection") {
              id = "heroSection";
            }
            if (lastActiveRef.current !== id) {
              lastActiveRef.current = id;
              window.requestAnimationFrame(() => setActiveSec(id));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", target: "/#heroSection", id: "heroSection" },
    { label: "Internships", target: "/#domainsSection", id: "domainsSection" },
    { label: "Services", target: "/#servicesSection", id: "servicesSection" },
    { label: "Verify", target: "/verification", id: "verification" },
    { label: "Apply Now", target: "/apply", id: "apply" },
  ];

  const isLinkActive = (item) => {
    if (location.pathname === item.target) return true;
    if (location.pathname === "/" && activeSec === item.id) return true;
    return false;
  };

  return (
    <>
      {/* NEW: Overlay to close menu when tapping outside */}
      <div 
        className={`${styles.overlay} ${hamMenu ? styles.overlayActive : ""}`} 
        onClick={toggleHamMenu} 
      />

      {/* 1. Desktop Menu */}
      <div className={styles.navRight1}>
        {navLinks.map((item) => (
          <Link 
            smooth
            key={item.label}
            to={item.target}
            className={`${styles.navLink} ${isLinkActive(item) ? styles.activeLi : ""}`}
          >
            <li className={styles.li}>{item.label}</li>
          </Link>
        ))}
      </div>

      {/* 2. Mobile Dropdown Menu */}
      <div className={`${styles.navRightHam} ${hamMenu ? styles.navOpen : ""}`}>
        {navLinks.map((item) => (
          <Link 
            smooth
            key={item.label + "-mob"}
            to={item.target}
            onClick={toggleHamMenu}
            className={`${styles.navLink} ${isLinkActive(item) ? styles.activeLi : ""}`}
          >
            <li className={styles.li}>{item.label}</li>
          </Link>
        ))}
      </div>

      {/* 3. Hamburger Icon */}
      <div className={styles.navRight2} onClick={toggleHamMenu}>
        <img
          src="/images/menus.svg"
          loading="lazy"
          alt="menu"
          className={!hamMenu ? styles.menuActiveImg : styles.menuDeactiveImg}
        />
        <img
          src="/images/close.svg"
          loading="lazy"
          alt="close"
          className={hamMenu ? styles.crossActiveImg : styles.crossDeactiveImg}
        />
      </div>
    </>
  );
};

export default NavRightEl;