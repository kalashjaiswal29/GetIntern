import "./style/index.css";
import HeroSection from "./components/heroSectionPage1.jsx";
import QualtiesCommitment from "./components/qualtiesCommitmentPage2.jsx";
import StartYourJourney from "./components/startYourJourneyPage3.jsx";
import Domians from "./components/domiansPage4.jsx";
import Services from "./components/servicesPage5.jsx";
import AboutUS from "./components/aboutusPage6.jsx";
import MSME from "./components/msmePage7.jsx";
import Footer from "./components/footerPage8.jsx";
import {Element} from "react-scroll";

function App() {
  return (
    <div className="main-wrapper ">
      <Element name="heroSection">
        <HeroSection />
        <QualtiesCommitment />
        <StartYourJourney />
      </Element>

      <Element name="domainsSection">
        <Domians />
      </Element>

      <Element name="servicesSection">
        <Services />
      </Element>

      <Element name="aboutSection">
        <AboutUS />
        <MSME />
      </Element>

      <Element name="footerSection">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
