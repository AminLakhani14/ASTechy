import { useEffect, useState } from "react";
import "./AboutUs.css"

function AboutUs() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
  return (
    <div>
      <div className="pt-5 HeadingBackground"
        /* style={
          windowWidth <= 500
            ? { marginTop: "90px" }
            : { marginTop: "90px" }
        } */
        style={{ justifyContent: "left" }}
      >
        <div className="w-50">
          <div className="col-lg-3"></div>
          <div style={{ marginLeft: "20%" }}>
            <h1 style={
              windowWidth <= 500
                ? { fontSize: "24px" }
                : { fontSize: "55px" }
            } className="mb-4">
              <b>
                About Us
              </b>
            </h1>
            <p>
              SSTech is a leading Canadian IT solutions company staffed by a team of skilled professionals in web development, mobile app development, UI/UX design, and blockchain development. We specialize in providing comprehensive software solutions and services, expertly handling complex projects to deliver outstanding results for our clients.
            </p>
            <div>
              <button data-aos="fade-up" className="HeaderButton">
                Let's Get Started
              </button>
              <button className="headerMenuButton mx-5">
                <b>Explore Services</b>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-lg-6 col-md-6" style={{ marginLeft: "10%" }}>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div>
                <p className="year">2009</p>
                <p className="contentTitle">For 13+ years</p>
                <p className="textContent">Ropstam has been a leading innovator in software development, delivering solutions to complex challenges.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div>
                <p className="year">1500+</p>
                <p className="contentTitle">Projects Completed</p>
                <p className="textContent">Our team of industry experts will skillfully craft a personalized online presence that brings your unique vision to life.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div>
                <p className="year">100+</p>
                <p className="contentTitle">Talented Members</p>
                <p className="textContent">Our team includes seasoned IT professionals with over a decade of experience in the industry.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div>
                <p className="year">500+</p>
                <p className="contentTitle">Happy Clients</p>
                <p className="textContent">At the heart of our successful business lies a commitment to putting customers’ requirements first.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/inJOaqTVEPw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>


    </div>
  );
}

export default AboutUs;
