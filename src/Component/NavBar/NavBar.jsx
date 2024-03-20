import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.jpg";
import { Modal, Button, Form } from 'react-bootstrap';

function Navbar() {
  const [click, setClick] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <div style={{ height: '90px' }}>
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
                  <a to='/blockchain-development-services' href="/blockchain-development-services">Blockchain</a>
                </li>
                <li>
                  <a to='/web-application-development-services' href="/web-application-development-services">Web Apps</a>
                </li>
                <li>
                  <a to='/mobile-app-development-services' href="/mobile-app-development-services">Mobile Apps</a>
                </li>
                <li>
                  <a to='/ui-ux-design-services' href="/ui-ux-design-services">UI/UX Design</a>
                </li>
                <li>
                  <a to='/wordpress-development-services' href="/wordpress-development-services">WordPress</a>
                </li>
                <li>
                  <a to='/shopify-development-services' href="/shopify-development-services">Shopify</a>
                </li>
                <li>
                  <a to='/mvp-development-services' href="/mvp-development-services">MVP</a>
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
                  <a to="/blockchain-development-services" href="/blockchain-development-services">Web Development</a>
                </li>
                <li>
                  <a to="/wordpress-development-services" href="/wordpress-development-services">Wordpress</a>
                </li>
                <li>
                  <a to="/SearchEngine" href="/SearchEngine">SEO</a>
                </li>
                <li>
                  <a to="/SocialMedia" href="/SocialMedia">Social Media Marketing</a>
                </li>
                <li>
                  <a to="/Wikipedia" href="/Wikipedia">Wikipedia</a>
                </li>
                <li>
                  <a to="/Ebook" href="/Ebook">Ebook</a>
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
            <li>
              <a to='/contact' href="/contact">Contact Us</a>
            </li>
          </ul>
          <div className="display-none" style={{ width: '15%' }}>
            <h5 className="headercontact me-3 mt-2 float-md-end" onClick={handleShowModal}>+92-307-1234567</h5>
          </div>
          <a to='/contact' href='/contact'>
            <button className=" display-none headerMenuButton mx-2"><b>Contact Us</b></button>
          </a>
        </nav>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pickup an app?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>https://www.ropstam.com wants to open this application.</p>
          <Form.Check
            type="checkbox"
            label="Always allow to open link"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            open an app
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Navbar;
