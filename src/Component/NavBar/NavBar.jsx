import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div style={{ height: '90px' }}>
        <nav>
          <Link to="/">
            <img
              src={logo}
              width="200"
              id='headerLogo'
              height="60"
              alt=""
            />
          </Link>

          <label htmlFor="drop" className="toggle" onClick={changeClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </label>
          <input type="checkbox" id="drop" />
          <ul className="menu">
            <li>
              <label htmlFor="drop-1" className="toggle">
                Services +
              </label>
              <Link to="#">Services</Link>
              <input type="checkbox" id="drop-1" />
              <ul>
                <li>
                  <Link to="#">Hire Team</Link>
                </li>
                <li>
                  <Link to='/graphics-development-services'>Blockchain</Link>
                </li>
                <li>
                  <Link to='/web-application-development-services'>Web Apps</Link>
                </li>
                <li>
                  <Link to='/seo-services'>Mobile Apps</Link>
                </li>
                <li>
                  <Link to='/ui-ux-design-services'>UI/UX Design</Link>
                </li>
                <li>
                  <Link to='/wordpress-development-services'>WordPress</Link>
                </li>
                <li>
                  <Link to='/social-media-marketing-services'>Shopify</Link>
                </li>
                <li>
                  <Link to='/3d-animation-services'>MVP</Link>
                </li>
              </ul>
            </li>
            <li>
              <label htmlFor="drop-2" className="toggle">
                Work +
              </label>
              <Link to="#">Work</Link>
              <input type="checkbox" id="drop-2" />
              <ul>
                <li>
                  <Link to="/WebDevelopment">Web Development</Link>
                </li>
                <li>
                  <Link to="/Wordpress">Wordpress</Link>
                </li>
                <li>
                  <Link to="/SearchEngine">SEO</Link>
                </li>
                <li>
                  <Link to="/SocialMedia">Social Media Marketing</Link>
                </li>
                <li>
                  <Link to="/Wikipedia">Wikipedia</Link>
                </li>
                <li>
                  <Link to="/Ebook">Ebook</Link>
                </li>
                <li>
                  <label htmlFor="drop-3" className="toggle">
                    Tutorials +
                  </label>
                  {/* Add your tutorials here */}
                </li>
              </ul>
            </li>
            <li>
              <Link to="/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
          <div className="display-none" style={{ width: '15%' }}>
            <h5 className="headercontact me-3 mt-2 float-md-end">+92-307-1234567</h5>
          </div>
          <div className="display-none">
          <Link to='/contact'>
            <button className=" display-none headerMenuButton mx-2"><b>Contact Us</b></button>
          </Link>
          </div>  
        </nav>
      </div>
    </>
  );
}

export default Navbar;
