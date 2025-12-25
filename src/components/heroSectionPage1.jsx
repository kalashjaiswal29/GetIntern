import NavBar from "./navBar";
import FrontPage from "./frontPage";

const HeroSection = ({handleNavClick,activeSection}) => {
  return (
    <>
    <NavBar handleNavClick={handleNavClick} activeSection={activeSection}/>
    <FrontPage/>
    </>
  )
}


export default HeroSection ;