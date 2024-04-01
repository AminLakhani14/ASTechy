import { RouterProvider } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route,useLocation  } from "react-router-dom";
import Home from "./Component/Home/Home";
import Footer from "./Global/Footer.jsx";
import Cities from "./Global/Cities.jsx";
import WebDevelopment from "./Component/Work/WebDevelopment/WebDevelopment.jsx";
import Wordpress from "./Component/Work/Wordpress/Wordpress.jsx";
import SearchEngine from "./Component/Work/SearchEngine/SearchEngine.jsx";
import SocialMedia from "./Component/Work/SocialMediaMarketing/SocialMediaMarketing.jsx";
import Wikipedia from "./Component/Work/Wikipedia/Wikipedia.jsx";
import Ebook from "./Component/Work/Ebook/Ebook.jsx";
import BlockchainPage from "./Component/Services/ServiceProvider/Blockchainservice.jsx";
import ContactUs from "./Component/ContactUs/ContactUs.jsx";
import AboutUs from "./Component/AboutUs/AboutUs.jsx";
import GraphicsDesigning from "./Component/Work/GraphicsDesigning/GraphicsDesigning.jsx";
import UIUXDesigning from "./Component/Work/UIUXDesigning/UIUXDesigning.jsx";
import Animation from "./Component/Work/3DAnimation/Animation.jsx";
import { useEffect, useState } from "react";
import NavBarMobile from "./Component/NavBar/NavBarMobile.jsx";
function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top on mount
  }, [pathname]);

  return null; // This component doesn't render anything
}
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  return (
    <div className="App">
      <div className="ResponsiveNav">
      {windowWidth <=1024?<NavBarMobile/>:<NavBar />}
      </div>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WebDevelopment" element={<><ScrollToTopOnMount /><WebDevelopment /></>} />
          <Route path="/Wordpress" element={<><ScrollToTopOnMount /><Wordpress /></>} />
          <Route path="/SearchEngine" element={<><ScrollToTopOnMount /><SearchEngine /></>} />
          <Route path="/SocialMedia" element={<><ScrollToTopOnMount /><SocialMedia /></>} />
          <Route path="/Wikipedia" element={<><ScrollToTopOnMount /><Wikipedia /></>} />
          <Route path="/Ebook" element={<><ScrollToTopOnMount /><Ebook /></>} />
          <Route path="/GraphicsDesigning" element={<><ScrollToTopOnMount /><GraphicsDesigning /></>} />
          <Route path="/UIUXDesigning" element={<><ScrollToTopOnMount /><UIUXDesigning /></>} />
          <Route path="/Animation" element={<><ScrollToTopOnMount /><Animation /></>} />
          <Route path="/graphics-development-services" element={<><ScrollToTopOnMount /><BlockchainPage /></>} />
          <Route path="/web-application-development-services" element={<><ScrollToTopOnMount /><BlockchainPage /></>} />
          <Route path="/seo-services" element={<><ScrollToTopOnMount /><BlockchainPage /></>} />
          <Route path="/ui-ux-design-services" element={<><ScrollToTopOnMount /><BlockchainPage /></>} />
          <Route path="/wordpress-development-services" element={<><ScrollToTopOnMount /><BlockchainPage /></>} />
          <Route path="/social-media-marketing-services" element={<><ScrollToTopOnMount /><BlockchainPage /></>} />
          <Route path="/3d-animation-services" element={<><ScrollToTopOnMount /><BlockchainPage /></>} />
          <Route path="/services" element={<><ScrollToTopOnMount /><BlockchainPage /></>} />
          <Route path="/contact" element={<><ScrollToTopOnMount /><ContactUs /></>} />
          <Route path="/AboutUs" element={<><ScrollToTopOnMount /><AboutUs /></>} />
        </Routes>
      {/* </Router> */}
      <Cities />
      <Footer />
    </div>
  );
}

export default App;
