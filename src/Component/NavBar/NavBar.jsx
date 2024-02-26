import React, { useState } from 'react';
import images from '../Assets/sfaj.svg'
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setTogleMenu] = useState(false)
  const openLink = () => {
    alert("Open Pickup an app")
  };
  return (
    <>
      {/* {login && <Login isOpen={login} closeModal={closeModal} />} */}
      <div className="app__navbar">
        <div><img src={images} style={{ height: '25%', width: '25%' }} alt="app logo" /></div>
        <ul className="app__navbar-links d-flex mb-0">
          <li className=""><a href="#Service">Services</a></li>
          <li className=""><a href="#Work">Work</a></li>
          <li className=""><a href="#AboutUs">About Us</a></li>
          <li className=""><a href="#Insights">Insights</a></li>
          <li className=""><a href="#Careers">Careers</a></li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className='' onClick={openLink} >+1 (866) 631-8767</a>
          <button href="/" className='ContactusBtn' >Contact Us</button>
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
      </div>
    </>
  )
};

export default Navbar;
