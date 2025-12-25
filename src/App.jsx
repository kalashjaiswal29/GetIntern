import "./style/index.css";
import HeroSection from "./components/heroSectionPage1.jsx";
import QualtiesCommitment from "./components/qualtiesCommitmentPage2.jsx";
import StartYourJourney from "./components/startYourJourneyPage3.jsx";
import Domians from "./components/domiansPage4.jsx";
import Services from "./components/servicesPage5.jsx";
import AboutUS from "./components/aboutusPage6.jsx";
import MSME from "./components/msmePage7.jsx";
import Footer from "./components/footerPage8.jsx";
import {
  Link,
  Button,
  Element,
  scroller,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

function App() {

  const handleNavClick = (item) => {
    switch (item) {
      case "Home":
        scroller.scrollTo("heroSectionRef", {
          duration: 150,
          delay: 0,
          smooth: true,
          offset: -89.59, 
        });
        
        break;
      case "Internships":
        scroller.scrollTo("domainsSectionRef", {
          duration: 150,
          delay: 0,
          smooth: true,
          offset: -89.59, 
        });
        
        break;
      case "Services":
        scroller.scrollTo("servicesSectionRef", {
          duration: 150,
          delay: 0,
          smooth: true,
          offset: -89.59, 
        });
        
        break;
      case "About Us":
        scroller.scrollTo("aboutSectionRef", {
          duration: 150,
          delay: 0,
          smooth: true,
          offset: -89.59, 
        });
        
        break;
      case "Contact Us":
        scroller.scrollTo("footerSectionRef", {
          duration: 150,
          delay: 0,
          smooth: true,
          offset: -89.59, 
        });
        
        break;
      default:
        break;
    }
  };

  return (
    <div className="main-wrapper ">
      <Element name="heroSectionRef">
        <HeroSection
          handleNavClick={handleNavClick}
          
        />
        <QualtiesCommitment />
        <StartYourJourney />
      </Element>

      <Element  name="domainsSectionRef">
        <Domians />
      </Element>

      <Element name="servicesSectionRef">
        <Services />
      </Element>

      <Element  name="aboutSectionRef">
        <AboutUS />
        <MSME />
      </Element>

      <Element name="footerSectionRef">
        <Footer />
      </Element>
    </div>
  );
}

export default App;
