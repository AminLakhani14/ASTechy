import { TextField } from "@mui/material";
import "../CSS/style.css";
import { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "aos/dist/aos.css";
import { Modal, Button, Form } from 'react-bootstrap';

const INITIAL_STATE = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  message: "",
}
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

  const [formData, setFormData] = useState({ ...INITIAL_STATE })
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    try {
      debugger;
      if (event) {
        const { name, value } = event.target;
        setFormData((prevField) => ({
          ...prevField,
          [name]: value,
        }));
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '', // Reset error message for the changed field
        }));
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }
  const validateForm = (data) => {
    const errors = {};
    const fields = ['name', 'email', 'phone', 'companyName', 'message'];

    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    fields.forEach(field => {
      if (!data[field]) {
        errors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`;
      } else if (field === 'email' && !emailRegex.test(data[field])) {
        errors[field] = 'Invalid email format.';
      }
    });

    return errors;
  };
  const api = async () => {
    const req = {
      Name: formData.email,
      MobileNo: formData.phone,
      Email: formData.name,
      Comments: formData.message,
      Address: "",
      CompanyName: formData.companyName,
      Country_City: "",
      Department: "",
      Company_Website: "",
      License: "",
    };
    debugger;
    try {
      const response = await fetch('http://localhost:3001/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        debugger
        alert('Email sent successfully');
      } else {
        debugger
        alert('Error sending email');
      }
    } catch (error) {
      debugger
      console.error('Error:', error);
      alert('Error sending email');
    }


    return;
    fetch('https://localhost:7163/api/contact-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers if needed
      },
      body: JSON.stringify(req),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        alert("Email Sent Successfully");
        return response.json();
      })
      .then(data => {
        console.log('Response:', data);
        // Handle the response here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors here
      });
  };

  const api1 = () => {
    debugger;
    if (Object.keys(formData).length > 0) {
      let oldVal = localStorage.getItem("userInfo") || "";
      let oldVal_Json = oldVal !== "" ? JSON.parse(oldVal) : ""
        let Data = oldVal_Json !== "" ? [...oldVal_Json, formData] : [formData];
        localStorage.setItem("userInfo", JSON.stringify(Data));
        setFormData({...INITIAL_STATE});
        alert("Record Saved Successfully")
    }
  }



  const sendEmail = () => {
    debugger;
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Submit the form if there are no errors
      console.log("Form submitted successfully!");
      // api();
      api1()
    }

  }


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
                id="standard-basic1"
                className="w-75 "
                style={{
                  marginLeft: "40px",
                  marginBottom: "30px",
                  marginTop: "20px",
                }}
                label="Full Name*"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="standard"
                error={Boolean(errors.name)}
                helperText={errors.name}

              />
              <TextField
                id="standard-basic2"
                className="w-75 "
                style={{ marginLeft: "40px", marginBottom: "30px" }}
                label="Work Email*"
                name="email"
                value={formData.email}
                onChange={handleChange}
                variant="standard"
                error={Boolean(errors.email)}
                helperText={errors.email}

              />
              <TextField
                id="standard-basic3"
                className="w-75 "
                style={{ marginLeft: "40px", marginBottom: "30px" }}
                label="Work Phone*"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                variant="standard"
                error={Boolean(errors.phone)}
                helperText={errors.phone}

              />
              <TextField
                id="standard-basic4"
                className="w-75 "
                style={{ marginLeft: "40px", marginBottom: "30px" }}
                label="Company Name*"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                variant="standard"
                error={Boolean(errors.companyName)}
                helperText={errors.companyName}

              />
              <TextField
                id="standard-basic5"
                className="w-75 "
                style={{ marginLeft: "40px", marginBottom: "30px" }}
                label="Messge*"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="standard"
                error={Boolean(errors.message)}
                helperText={errors.message}

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
                <button className="headerMenuButton mx-2" onClick={sendEmail}>
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
