import { RouterProvider } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Footer from "./Global/Footer.jsx";
import Cities from "./Global/Cities.jsx";
import WebDevelopment from "./Component/Work/WebDevelopment/WebDevelopment.jsx";
import Wordpress from "./Component/Work/Wordpress/Wordpress.jsx";
import SearchEngine from "./Component/Work/SearchEngine/SearchEngine.jsx";
import SocialMedia from "./Component/Work/SocialMediaMarketing/SocialMediaMarketing.jsx";
import Wikipedia from "./Component/Work/Wikipedia/Wikipedia.jsx";
import Ebook from "./Component/Work/Ebook/Ebook.jsx";
import Service from "./Component/Services/Service.jsx";
import BlockchainPage from "./Component/Services/ServiceProvider/Blockchainservice.jsx";
import ContactUs from "./Component/ContactUs/ContactUs.jsx";
import AboutUs from "./Component/AboutUs/AboutUs.jsx";
import GraphicsDesigning from "./Component/Work/GraphicsDesigning/GraphicsDesigning.jsx";
import UIUXDesigning from "./Component/Work/UIUXDesigning/UIUXDesigning.jsx";
import Animation from "./Component/Work/3DAnimation/Animation.jsx";

function App() {
  return (
    <div className="App">
      <div className="ResponsiveNav">
      <NavBar />
      </div>
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/Wordpress" element={<Wordpress />} />
          <Route path="/SearchEngine" element={<SearchEngine />} />
          <Route path="/SocialMedia" element={<SocialMedia />} />
          <Route path="/Wikipedia" element={<Wikipedia />} />
          <Route path="/Ebook" element={<Ebook />} />
          <Route path="/GraphicsDesigning" element={<GraphicsDesigning />} />
          <Route path="/UIUXDesigning" element={<UIUXDesigning />} />
          <Route path="/Animation" element={<Animation />} />
          <Route path="/graphics-development-services" element={<BlockchainPage />} />
          <Route path="/web-application-development-services" element={<BlockchainPage />} />
          <Route path="/seo-services" element={<BlockchainPage />} />
          <Route path="/ui-ux-design-services" element={<BlockchainPage />} />
          <Route path="/wordpress-development-services" element={<BlockchainPage />} />
          <Route path="/social-media-marketing-services" element={<BlockchainPage />} />
          <Route path="/3d-animation-services" element={<BlockchainPage />} />
          <Route path="/services" element={<BlockchainPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      {/* </Router> */}
      <Cities />
      <Footer />
    </div>
  );
}

export default App;
