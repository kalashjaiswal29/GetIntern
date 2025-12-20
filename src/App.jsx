import './style/index.css'
import HeroSection from "./components/heroSectionPage1.jsx";
import QualtiesCommitment from "./components/qualtiesCommitmentPage2.jsx";
import StartYourJourney from "./components/startYourJourneyPage3.jsx";
import Domians from "./components/domiansPage4.jsx";
import Services from "./components/servicesPage5.jsx"
import AboutUS from "./components/aboutusPage6.jsx"
import MSME from "./components/msmePage7.jsx"
import Footer from './components/footerPage8.jsx';
function App() {
  return (
    <div className="main-wrapper ">
    <HeroSection/>
    <QualtiesCommitment/>
    <StartYourJourney/>
    <Domians/>
    <Services/>
    <AboutUS/>
    <MSME/>
    <Footer/>
    </div>
  )
}

export default App
