import {Outlet} from "react-router-dom";
import MainSec from "./components/mainSec";
import NavBar from "./components/navBar";
import Footer from "./components/footerPage8.jsx";


function App() {
  return (<>
   <NavBar />
   <Outlet />
    {/* <MainSec/> */}
    <section id="footerSection">
        <Footer />
      </section>
    </>
  );
}

export default App;
