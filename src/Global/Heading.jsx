import { TextField } from "@mui/material";
import "../CSS/style.css";
import { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "aos/dist/aos.css";

function Heading(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const PageRoute = window.location.pathname.replace(/^\//, "");
  useEffect(() => {
    // Function to update the windowWidth state when the resize event occurs
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleGetStartedClick = () => {
    // Scroll down 200 pixels when "Let's Get Started" button is clicked
    window.scrollBy(0, 1000);
  };

  return (
    <div className="pt-5 HeadingBackground ">
      <div className="width50">
        <div className="col-lg-3 col-sm-3 col-md-3"></div>
        <div className={windowWidth <= 768 ? "justify-content-center d-flex flex-column align-items-center" : "justify-content-center d-flex flex-column"}>
          <h1
            style={
              windowWidth <= 768
                ? { fontSize: "24px" }
                : { fontSize: "55px" }
            } className="mb-4"
            data-aos="fade-right">
            <b>{props.text}</b>
          </h1>
          {PageRoute == 'services' ? <p
            data-aos="fade-right"
            style={
              windowWidth <= 768
                ? { fontSize: "14px", fontWeight: "400", color: "#ffffff", textAlign: 'center', padding: '0px 20px 0px 20px' }
                : { fontSize: "20px", fontWeight: "400", color: "#ffffff" }
            }>
            <b>Boosting Your Success through Advanced Technology and Client-Centric Solutions</b>
          </p> : ''}
          <p
            data-aos="fade-right"
            style={
              windowWidth <= 768
                ? { fontSize: "14px", fontWeight: "400", color: "#ffffff", textAlign: 'center', padding: '0px 20px 0px 20px' }
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
                  <div style={{ display: 'flex' }}>
                    <PhoneIcon
                      className="mx-xl-2"
                      fontSize="large"
                    />
                    <p>Call Us</p>
                  </div>
                  <div style={{ display: 'flex' }}>
                    <EmailIcon
                      fontSize="large"
                      className="mx-xl-2"
                    />
                    <p>Email Us</p>
                  </div>
                </div>
                <div>
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
          ""
        )}
      </div>
    </div>
  );
}

export default Heading;
