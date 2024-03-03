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
        <ul className="app__navbar-links d-flex mb-0" style={{ marginRight: 'auto' }}>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Work
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              About Us
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Insights
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Careers
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className='' onClick={openLink} >+1 (866) 631-8767</a>
          <button href="/" className='ContactusBtn' >CONTACT US</button>
        </div>
        {/* <div className="app__navbar-smallscreen">
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <ul className="app__navbar-smallscreen_links">
                <li className="" onClick={() => setTogleMenu(false)}><a href="#home">Home</a></li>
                <li className="" onClick={() => setTogleMenu(false)}><a href="#about">About</a></li>
                <li className="" onClick={() => setTogleMenu(false)}><a href="#menu">Menu</a></li>
                <li className="" onClick={() => setTogleMenu(false)}><a href="#ourchefs">Our Chef's</a></li>
                <li className="" onClick={() => setTogleMenu(false)}><a href="#contactus">Contact Us</a></li>
              </ul>
            </div>
          )}
        </div> */}
      </div>
    </>
  )
};

export default Navbar;
