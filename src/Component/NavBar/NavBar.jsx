import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../Images/logo.png";
import { Link } from "react-router-dom";
import { Modal, Button, Form } from 'react-bootstrap';

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const stopPropagation = (e) => {
    setServicesOpen(!servicesOpen);
  };
  useEffect(() => {
    setServicesOpen(true);
  }, [stopPropagation]);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  const [showModal, setShowModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  return (
    <>
      <div style={{ height: "90px" }}>
        <nav>
          <Link to="/">
            <img src={logo} width="200" id="headerLogo" height="60" alt="" />
          </Link>

          <input type="checkbox" id="drop" />
          <ul className="menu">
            <li>
              <label htmlFor="drop-1" className="toggle">
                Services +
              </label>
              <Link style={{ backgroundColor: "white" }} to="/services">
                Services
              </Link>
              <input type="checkbox" id="drop-1" />
              {servicesOpen && (
                <ul>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/graphics-development-services"
                    >
                      Graphics Designing
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/web-application-development-services"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/seo-services"
                    >
                      SEO
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/ui-ux-design-services"
                    >
                      UI/UX Designing
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/wordpress-development-services"
                    >
                      WordPress Development
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/social-media-marketing-services"
                    >
                      Social Media Marketing
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/3d-animation-services"
                    >
                      3D Animation
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={stopPropagation}>
              <label htmlFor="drop-2" className="toggle">
                Work +
              </label>
              <Link style={{ backgroundColor: "white" }} to="/Work">
                Work
              </Link>
              <input type="checkbox" id="drop-2" />
              {servicesOpen && (
                <ul>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/GraphicsDesigning"
                    >
                      Graphics Designing
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/WebDevelopment"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/SearchEngine"
                    >
                      SEO
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/UIUXDesigning"
                    >
                      UI/UX Designing
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/Wordpress"
                    >
                      Wordpress Development
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/SocialMedia"
                    >
                      Social Media Marketing
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <Link
                      style={{ backgroundColor: "white" }}
                      to="/Animation"
                    >
                      3D Animation
                    </Link>
                  </li>
                  <li onClick={stopPropagation}>
                    <label htmlFor="drop-3" className="toggle">
                      Tutorials +
                    </label>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={stopPropagation}>
              <Link style={{ backgroundColor: "white" }} to="/AboutUs">
                About Us
              </Link>
            </li>
            <li onClick={stopPropagation}>
              <Link style={{ backgroundColor: "white" }} to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="display-none" style={{ width: "15%" }}>
            <h5 className="headercontact me-3 mt-2 float-md-end" onClick={handleShowModal}>
              +1(262)765-4448
            </h5>
          </div>
          <div className="display-none">
            <Link style={{ backgroundColor: "white" }} to="/contact">
              <button className="display-none headerMenuButton mx-2">
                <b>Contact Us</b>
              </button>
            </Link>
          </div>
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
