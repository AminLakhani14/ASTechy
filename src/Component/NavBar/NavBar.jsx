import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.jpg";
import { useHistory } from "react-router-dom";

function Navbar() {
    const [click, setClick] = useState(false);
    const changeClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  //   const history = useHistory();

  // const contactUs = () => {
  //   history.push('/contact');
  // };
  return (
    <>
    <div style={{height:'90px'}}>
      <nav >
      <a href="/" to="/">
        <img
            data-aos="fade-up"
            src={logo}
            width="200"
            id='headerLogo'
            height="60"
            ></img>
            </a>

        <label for="drop" class="toggle" onClick={changeClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </label>
        <input type="checkbox" id="drop" />
        <ul class="menu">
          <li>
            <label for="drop-1" class="toggle">
              Services +
            </label>
            <a href="#">Services</a>
            <input type="checkbox" id="drop-1" />
            <ul>
              <li>
                <a href="#">Hire Team</a>
              </li>
              <li>
                <a href="#">Blockchain</a>
              </li>
              <li>
                <a href="#">Web Apps</a>
              </li>
              <li>
                <a href="#">Mobile Apps</a>
              </li>
               <li>
                <a href="#">UI/UX Design</a>
              </li> 
              <li>
                <a href="#">WordPress</a>
              </li>
               <li>
                <a href="#">Shopify</a>
              </li>
              <li>
                <a href="#">MVP</a>
              </li>
            </ul>
          </li>
          <li>
            <label for="drop-2" class="toggle">
              Work +
            </label>
            <a href="#">Work</a>
            <input type="checkbox" id="drop-2" />
            <ul>
              <li>
                <a to="/WebDevelopment"  href="/WebDevelopment">Web Development</a>
              </li>
              <li>
                <a to="/Wordpress"  href="/Wordpress">Wordpress</a>
              </li>
              <li>
                <a to="/SearchEngine"  href="/SearchEngine">SEO</a>
              </li>
              <li>
                <a to="/SocialMedia"  href="/SocialMedia">Social Media Marketing</a>
              </li>
              <li>
                <a to="/Wikipedia"  href="/Wikipedia">Wikipedia</a>
              </li>
              <li>
                <a to="/Ebook"  href="/Ebook">Ebook</a>
              </li>
              <li>
                <label for="drop-3" class="toggle">
                  Tutorials +
                </label>
                {/* <a href="#">Tutorials</a>
                <input type="checkbox" id="drop-3" />

                <ul>
                  <li>
                    <a href="#">HTML/CSS</a>
                  </li>
                  <li>
                    <a href="#">jQuery</a>
                  </li>
                  <li>
                    <a href="#">Other</a>
                  </li>
                </ul> */}
              </li>
            </ul>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
        <div className="display-none" style={{width:'15%'}}>
        <h5 className="headercontact me-3 mt-2 float-md-end">+92123456789</h5>
        </div>
        <a to='/contact' href='/contact'>
          <button className=" display-none headerMenuButton mx-2"><b>Contact Us</b></button>
          </a>
      </nav>
      </div>
    </>
  );
}

export default Navbar;
