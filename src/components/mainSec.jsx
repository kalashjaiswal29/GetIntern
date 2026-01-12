import "../style/index.css";
import HeroSection from "./heroSectionPage1.jsx";
import QualtiesCommitment from "./qualtiesCommitmentPage2.jsx";
import StartYourJourney from "./startYourJourneyPage3.jsx";
import Domians from "./domiansPage4.jsx";
import Services from "./servicesPage5.jsx";
import AboutUS from "./aboutusPage6.jsx";
import MSME from "./msmePage7.jsx";
import ScrollToTop from "./scrollTop.jsx"


const MainSec = () => {
  return(
    
    <div className="main-wrapper ">
      <ScrollToTop />
      <section id="heroSection">
        <HeroSection />
        <QualtiesCommitment />
        <StartYourJourney />
      </section>

      <section id="domainsSection">
        <Domians />
      </section>

      <section id="servicesSection">
        <Services />
      </section>

      <section id="aboutSection">
        <AboutUS />
        <MSME />
      </section>

      
    </div>
  )
}

export default MainSec