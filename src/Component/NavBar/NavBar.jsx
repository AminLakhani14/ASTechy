import React, { useState } from 'react';
// import { GiHamburgerMenu, GiHidden } from 'react-icons/gi'
// import { MdOutlineRestaurantMenu } from 'react-icons/md'
// import Login from '../Login/Login';
// import Login from './Login/login';
import images from '../Assets/sfaj.svg'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setTogleMenu] = useState(false)
  const [login, setlogin] = useState(false)
  const openModal = () => {
    setlogin(true)
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
  }
  const closeModal = () => {
    setlogin(false)
    document.body.style.overflowY = "visible";
    document.body.style.overflowX = "hidden";
  }
  const openLink = () => {
    alert("Open Pickup an app")
  };
  return (
    <>
      {/* {login && <Login isOpen={login} closeModal={closeModal} />} */}
      <nav className="app__navbar">
        <div><img src={images.sfaj} alt="app logo" /></div>
        <ul className="app__navbar-links">
          <li className=""><a href="#Service">Services</a></li>
          <li className=""><a href="#Work">Work</a></li>
          <li className=""><a href="#AboutUs">About Us</a></li>
          <li className=""><a href="#Insights">Insights</a></li>
          <li className=""><a href="#Careers">Careers</a></li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className=''
            onClick={openLink}
          >+1 (866) 631-8767</a>
          <button href="/" className=''
          // onClick={bookTable}
          >Contact Us</button>
        </div>
        {/* <div className="app__navbar-smallscreen">
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans" onClick={() => setTogleMenu(false)}><a href="#home">Home</a></li>
                <li className="p__opensans" onClick={() => setTogleMenu(false)}><a href="#about">About</a></li>
                <li className="p__opensans" onClick={() => setTogleMenu(false)}><a href="#menu">Menu</a></li>
                <li className="p__opensans" onClick={() => setTogleMenu(false)}><a href="#ourchefs">Our Chef's</a></li>
                <li className="p__opensans" onClick={() => setTogleMenu(false)}><a href="#contactus">Contact Us</a></li>
              </ul>
            </div>
          )}
        </div> */}
      </nav>
    </>
  )
};

export default Navbar;
