import { RouterProvider } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import WebDevelopment from "./Component/WebDevelopment/WebDevelopment";
import Wordpress from "./Component/Wordpress/Wordpress.jsx";
import Footer from "./Global/Footer.jsx";
import Cities from "./Global/Cities.jsx";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WebDevelopment" element={<WebDevelopment />} />
          <Route path="/Wordpress" element={<Wordpress />} />
        </Routes>
      </Router>
      <Cities />
      <Footer />
    </div>
  );
}

export default App;
