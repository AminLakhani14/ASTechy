import { TextField } from "@mui/material";
import "../CSS/style.css";
import { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "aos/dist/aos.css";
import { Modal, Button, Form } from 'react-bootstrap';

function Heading(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const PageRoute = window.location.pathname.replace(/^\//, "");
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleGetStartedClick = () => {
    window.scrollBy(0, 680);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const phoneNumber = "+1(262)765-4448";

  return (
    <div className={windowWidth <= 1024 ? "pt-5 mt-5 HeadingBackground" : "HeadingBackground "}>
      <div className="width50">
        <div className="col-lg-3 col-sm-3 col-md-3"></div>
        <div className={windowWidth <= 1024 ? "justify-content-center d-flex flex-column align-items-center" : "justify-content-center d-flex flex-column"}>
          <h1
            style={
              windowWidth <= 1024
                ? { fontSize: "24px" }
                : { fontSize: "55px" }
            } className="mb-4"
            data-aos="fade-right">
            <b>{props.text}</b>
          </h1>
          {PageRoute == 'services' ? <p
            data-aos="fade-right"
            style={
              windowWidth <= 1024
                ? { fontWeight: "400", color: "#ffffff", textAlign: 'center', padding: '0px 20px 0px 20px' }
                : { fontSize: "20px", fontWeight: "400", color: "#ffffff" }
            }>
            <b>Boosting Your Success through Advanced Technology and Client-Centric Solutions</b>
          </p> : ''}
          <p
            data-aos="fade-right"
            style={
              windowWidth <= 1024
                ? { fontWeight: "400", color: "#ffffff", textAlign: 'center', padding: '0px 20px 0px 20px' }
                : { fontSize: "20px", fontWeight: "400", color: "#ffffff" }
            }>
            {props.paragraph}
          </p>
          <div className="d-flex mt-4">
            {props.startedbtn === true ?
              <button data-aos="fade-up" onClick={handleGetStartedClick} className="HeaderButton">
                Let's Get Started
              </button> : ''}
            {props.workBtn === true &&
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex' }} className="emailusclass" onClick={handleShow}>
                    <PhoneIcon
                      className="mx-xl-2"
                      fontSize="medium"
                    />
                    <p>Call Us</p>
                  </div>
                  <div style={{ display: 'flex' }} className="emailusclass">
                    <EmailIcon
                      fontSize="medium"
                      className="mx-xl-2"
                    />
                    <a href='mailto:your@email.com' className="emailustextclass">
                      <p>Email Us</p>
                    </a>
                  </div>
                </div>
                <div className="mt-3">
                  <button className="HeaderButton">
                    Explore Our Work
                  </button>
                </div>
              </div>
            }
            {props.visible == true ? (
              <button className="ExploreButton mx-3">Explore Services</button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="width75">
        {props.feedbackvisible == true ? (
          <div className="d-flex">
            <div className="FeedbackBackground"
              data-aos="fade-left"
            >
              <TextField
                id="standard-basic"
                className="w-75 "
                style={{
                  marginLeft: "40px",
                  marginBottom: "30px",
                  marginTop: "20px",
                }}
                label="Full Name*"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                className="w-75 "
                style={{ marginLeft: "40px", marginBottom: "30px" }}
                label="Work Email*"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                className="w-75 "
                style={{ marginLeft: "40px", marginBottom: "30px" }}
                label="Work Phone*"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                className="w-75 "
                style={{ marginLeft: "40px", marginBottom: "30px" }}
                label="Company Name*"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                className="w-75 "
                style={{ marginLeft: "40px", marginBottom: "30px" }}
                label="Messge*"
                variant="standard"
              />
              <div
                style={
                  windowWidth <= 500
                    ? {
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "30px",
                      marginBottom: "15px",
                    }
                    : {
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "30px",
                    }
                }
              >
                <button className="headerMenuButton mx-2">
                  <b>Get in Touch</b>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ height: "550pxy" }}></div>
        )}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Phone Number</Modal.Title>
        </Modal.Header>
        <Modal.Body>{phoneNumber}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => { navigator.clipboard.writeText(phoneNumber); handleClose(); }}>
            Copy Number
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Heading;
