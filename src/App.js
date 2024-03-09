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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/Wordpress" element={<Wordpress />} />
          <Route path="/SearchEngine" element={<SearchEngine />} />
          <Route path="/SocialMedia" element={<SocialMedia />} />
          <Route path="/Wikipedia" element={<Wikipedia />} />
          <Route path="/Ebook" element={<Ebook />} />
          <Route path="/blockchain" element={<BlockchainPage />} />
        </Routes>
      </Router>
      <Cities />
      <Footer />
    </div>
  );
}

export default App;
