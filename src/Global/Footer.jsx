import "../CSS/Footer.css";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import { useEffect, useState } from "react";

function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Function to update the windowWidth state when the resize event occurs
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <footer className="footer" >
      <div className="container">
        <div
          className={windowWidth < 1024 ? "row flex-column align-items-center" : "row justify-content-center"}
          style={
            windowWidth <= 500
              ? {
                  alignItems: "center",
                  marginBottom: "20px",
                  flexDirection: "column",
                }
              : {}
          }
        >
          <div className="col-lg-3 col-md-6 t-center">
            {/* About Us section (replace with your content) */}
            <PhoneIcon
              style={{ marginTop: "30px" }}
              className="mx-xl-2"
              fontSize="large"
            />
            <div
              style={{
                display: "inline-grid",
                borderLeft: "1px solid #ffffff",
                marginTop: "40px",
                height: "40px",
              }}
            >
              <p
                className="mx-2"
                style={{ marginTop: "-10px", marginBottom: "8px" }}
              >
                Have a query?
              </p>
              <p className="mx-2">+1(866)631-8767</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 t-center" style={{ marginTop: "30px" }}>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "12px" }}
            >
              <LinkedInIcon fontSize="large" />
              <InstagramIcon fontSize="large" />
              <FacebookIcon fontSize="large" />
              <XIcon fontSize="large" />
            </div>
            <ul className="contact-info">
              <li style={{ fontSize: "20px", marginLeft: "30px" }}>
                <a>Terms of Use – Privacy Policy.</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 px-5 t-center">
            {/* Social Media section (replace with your links) */}
            <EmailIcon
              style={{ marginTop: "30px" }}
              fontSize="large"
              className="mx-xl-2"
            />
            <div
              style={{
                display: "inline-grid",
                borderLeft: "1px solid #ffffff",
                marginTop: "40px",
                height: "40px",
              }}
            >
              <p
                className="mx-2"
                style={{ marginTop: "-10px", marginBottom: "8px" }}
              >
                Email us at
              </p>
              <p className="mx-2">info@ASTECHY.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; {new Date().getFullYear()} ASTECHY Inc. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
