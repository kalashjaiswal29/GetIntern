import {Outlet} from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footerPage8.jsx";
import SocialPopup from "./components/SocialPopup.jsx"
import OfferBox from "./components/offerBox.jsx"
import MovingTicker from "./components/movingTicker.jsx"

function App() {
  return (<>
  
      <OfferBox/>
   <NavBar />
   <SocialPopup/>
   
   <Outlet />
    {/* <MainSec/> */}
    <section id="footerSection">
        <Footer />
      </section>
      <MovingTicker/>
    </>
  );
}

export default App;
