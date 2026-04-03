# 🎓 GetIntern - Virtual Internship Platform

<p align="center">
  <img src="[https://img.shields.io/badge/Status-Live-brightgreen.svg](https://img.shields.io/badge/Status-Live-brightgreen.svg)" alt="Status" />
  <img src="[https://img.shields.io/badge/Type-Automation_Workflow-blue.svg](https://img.shields.io/badge/Type-Automation_Workflow-blue.svg)" alt="Type" />
  <img src="[https://img.shields.io/badge/MSME-Registered-orange.svg](https://img.shields.io/badge/MSME-Registered-orange.svg)" alt="MSME" />
</p>

**GetIntern** is an MSME-registered platform designed to bridge the gap between academic learning and industry requirements. By leveraging automated workflows, the platform handles intern onboarding, task distribution, and secure certificate issuance with minimal manual intervention.

[🌐 Live Site: getintern.in](https://getintern.in)

---

## ⚡ The Internship Workflow

1. **Onboarding:** Interns submit their details through a structured static landing page.
2. **Confirmation:** An automated confirmation email is triggered immediately upon submission.
3. **Task Management:** Interns receive their specific domain tasks and submission guidelines via email.
4. **Certification:** Upon successful completion and submission, a professional certificate is issued.
5. **Verification:** Every certificate includes a unique **CID (Certificate ID)** which can be verified directly on the platform.

---

## 🛠️ Tech Stack & Serverless Architecture

* **Frontend:** **React.js** & **Tailwind CSS** (Custom Theme: #4F46E5 & #F97316).
* **Backend (Serverless):** **Google Apps Script (GAS)** acting as a secure middleware for business logic.
* **Database:** **Google Sheets API** for structured cloud-based data storage.
* **Design & UI:** **Figma** for high-fidelity prototyping and **Canva** for professional certificate assets.

---

## ⚡ Automated Internship Lifecycle

The platform is built on a fully automated pipeline to ensure a seamless experience for students:

* **Instant Confirmation:** Upon registration, the system triggers an automated confirmation email to verify the intern's application.
* **Task Distribution:** Based on the selected domain (Web Dev, Python, etc.), specific tasks and guidelines are automatically dispatched to the intern’s inbox.
* **Certificate Generation:** After successful submission and review, the system generates a professional, high-resolution certificate with a unique **CID**.
* **Verification Logic:** A dedicated verification module allows third parties to validate the authenticity of any certificate using its unique ID against our database.

---

## 🛡️ Anti-Spam & Data Integrity Measures

To protect the database and prevent fake registrations, I implemented custom backend logic in the Google Apps Script environment:

* **Rate Limiting:** Implemented a per-user submission limit that restricts a single email address to a maximum of 2 attempts per 24 hours.
* **Honeypot Bot Detection:** A specialized trap mechanism to identify and block automated bots attempting to fill the registration form.
* **Submission Velocity Check:** Real-time analysis that flags and rejects suspicious submissions made in under 2.5 seconds (identifying non-human interaction).
* **Origin Authorization:** Secure API restrictions that only allow authorized requests originating from **getintern.in**.
* **Server-Side Validation:** Strict Regex-based filtering for Email and Phone formats to maintain 100% data accuracy.
---

## 📂 Project Structure

* **src/components/**: UI Elements (Navbar, Footer, Forms)
* **src/pages/**: Home, Verify, Submit Task
* **src/assets/**: Branding & Certificate Templates
* **src/utils/**: CID Generation & Validation Logic
* **public/**: Static Assets & Global CSS

---

## 📈 Impact & Vision

As the founder, I built GetIntern to solve the problem of unverified internships. By focusing on a **verification-first** approach, we ensure that every intern's hard work is backed by a legitimate credential.

---
<hr>

<h2 align="center">🌐 Connect with GetIntern</h2>

<p align="center">
  <a href="https://www.linkedin.com/in/kalash-jaiswal-15bb6b323/">
    <img src="https://img.shields.io/badge/Connect_with_Founder-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="Founder LinkedIn" />
  </a>
  &nbsp;&nbsp;
  <a href="https://www.linkedin.com/company/getintern/">
    <img src="https://img.shields.io/badge/GetIntern_Official-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="Company LinkedIn" />
  </a>
</p>
  &nbsp;&nbsp;
  <a href="https://www.instagram.com/getinternhq/">
    <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
  </a>
  &nbsp;&nbsp;
  <a href="https://whatsapp.com/channel/0029Vb7Lp7f90x2w8MBlPV44">
    <img src="https://img.shields.io/badge/WhatsApp_Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp" />
  </a>
</p>

<p align="center">
  <b>Kalash Jaiswal | Founder @ GetIntern</b><br>
  B.Tech Computer Science Student | Full-Stack Developer
</p>

<p align="center">
  Focused on building scalable solutions and empowering the next generation of developers.
</p>

<div align="center">
  <sub>For support & inquiries: <a href="mailto:contact@getintern.in">contact@getintern.in</a></sub><br>
  <sub>Built with ❤️ and React. © 2026 <b>GetIntern</b>. All Rights Reserved.</sub>
</div>