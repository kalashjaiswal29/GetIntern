import {Outlet} from "react-router-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footerPage8.jsx";
import SocialPopup from "./components/SocialPopup.jsx"

function App() {
  return (<>
   <NavBar />
   <SocialPopup/>
   <Outlet />
    {/* <MainSec/> */}
    <section id="footerSection">
        <Footer />
      </section>
    </>
  );
}

export default App;
