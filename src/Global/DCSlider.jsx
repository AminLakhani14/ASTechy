import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import cloud from "../Images/cloud.jpeg";
import slider2 from "../Images/slider2.gif";
import data from "../Images/data.gif";
import slide3 from "../Images/Slide3.gif";
import "../CSS/DCSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/style.css";
import { useNavigate } from "react-router-dom";
const NextIcon = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const PreviousIcon = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosNewIcon />
    </div>
  );
};

function AutoPlay(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  /*** To Open Slider Buttons ****/
  const openServices = (e) => {
    if (e.target.id === 'webappservices') {
      navigate('/web-application-development-services');
    } else if (e.target.id === 'seoservice') {
      navigate('/seo-services');
    } else if (e.target.id === 'uiuxservice') {
      navigate('/ui-ux-design-services')
    } else {
      navigate('/')
    }
  };
  /*** To Open Slider Buttons ****/
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextIcon />,
    prevArrow: <PreviousIcon />,
    speed: 2000,
    autoplaySpeed: 10000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className={windowWidth <= 1024 ? "slider-container mt-5" : "slider-container "}>
      <Slider {...settings}>
        <div className="background1" style={ windowWidth <= 1024 ? { width:"100%"} : ""}>
          <div
            style={{ color: "#ffffff" }}
            className={
              windowWidth <= 1024
                ? "width80 d-flex justify-content-center pt-5 "
                : "width50 d-flex align-items-center"
            }
          >
            <div
              className={
                windowWidth <= 1024 ? "" : "col-lg-3 col-sm-2 col-md-3"
              }
            ></div>
            <div>
              <h1 className="mb-4 sliderMainFont">
                <b>
                  Streamline Your Web App with Our Cutting-Edge All-In-One
                  Solutions.
                </b>
              </h1>
              <p className="sliderParagraph">
                Our Web Application Development Service provide a comprehensive
                solution for all your web needs, utilizing cutting-edge
                technology to optimize efficiency,productivity,and success.
              </p>
              <div
                className={
                  windowWidth <= 1024
                    ? "d-flex mt-4 justify-content-center"
                    : "d-flex mt-4"
                }
              >
                <button className="HeaderButton" id="webappservices" onClick={openServices}>Web App Services</button>
              </div>
            </div>
          </div>
          <div
            className={
              windowWidth <= 1024
                ? "d-none"
                : "width50 d-flex align-items-center"
            }
          >
            <img src={data} alt="Computer man" />
          </div>
        </div>

        <div className="background2" style={ windowWidth <= 1024 ? {width:"109% !important"} : ""}>
          <div
            style={{ color: "#ffffff" }}
            className={
              windowWidth <= 1024
                ? "d-flex justify-content-center pt-5 "
                : "width50 d-flex align-items-center"
            }
          >
            <div
              className={
                windowWidth <= 1024 ? "" : "col-lg-3 col-sm-2 col-md-3"
              }
            ></div>
            <div>
              <h1 className="mb-4 sliderMainFont">
                <b>
                  Optimize Your User Experience with Our Cutting-Edge All-In-One UI/UX Solutions.
                </b>
              </h1>
              <p className="sliderParagraph">
                Our UI/UX Design Service offers a comprehensive solution for all your digital interface needs,
                harnessing cutting-edge technology to optimize efficiency, productivity, and success.
              </p>
              <div
                className={
                  windowWidth <= 1024
                    ? "d-flex mt-4 justify-content-center"
                    : "d-flex mt-4"
                }
              >
                <button className="HeaderButton" id="uiuxservice" onClick={openServices}>UI/UX Services</button>
              </div>
            </div>
          </div>
          <div
            className={
              windowWidth <= 1024
                ? "d-none"
                : "width50 d-flex align-items-center"
            }
          >
            <img src={slider2} alt="Computer man" />
          </div>
        </div>

        <div className="background3" style={ windowWidth <= 1024 ? {width:"109% !important"} :"" }>
          <div
            style={{ color: "#ffffff" }}
            className={
              windowWidth <= 1024
                ? "width80 d-flex justify-content-center pt-5 "
                : "width50 d-flex align-items-center"
            }
          >
            <div
              className={
                windowWidth <= 1024 ? "" : "col-lg-3 col-sm-2 col-md-3"
              }
            ></div>
            <div>
              <h1 className="mb-4 sliderMainFont">
                <b>
                  Streamline Your SEO with Our Cutting-Edge All-In-One
                  Solutions.
                </b>
              </h1>
              <p className="sliderParagraph">
                Optimize your online presence with our SEO-driven web
                application development services. let us elevate your
                digital footprint with cutting-edge technology and personalized
                SEO solutions.
              </p>
              <div
                className={
                  windowWidth <= 1024
                    ? "d-flex mt-4 justify-content-center"
                    : "d-flex mt-4"
                }
              >
                <button className="HeaderButton" id="seoservice" onClick={openServices}>SEO Services</button>
              </div>
            </div>
          </div>
          <div
            className={
              windowWidth <= 1024
                ? "d-none"
                : "width50 d-flex align-items-center"
            }
          >
            <img style={{ height: "50vh" }} src={slide3} alt="Computer man" />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
