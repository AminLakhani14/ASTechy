import React from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import cloud from "../Images/cloud.jpeg";
import slider2 from "../Images/slider2.gif";
import data from "../Images/data.gif";
import "../CSS/DCSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextIcon />,
    prevArrow: <PreviousIcon />,
    speed: 10000,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
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
    <div className="slider-container">
      <Slider {...settings}>
        <div className="background1">
          <div style={{ color: "#ffffff" }} className="width50 d-flex">
            <div className="col-lg-3 col-sm-3 col-md-3"></div>
            <div>
              <h1 className="mb-4">
                <b>
                  Streamline Your Web App with Our Cutting-Edge All-In-One
                  Solutions.
                </b>
              </h1>
              <p>
                Our Web Application Development Service provide a comprehensive
                solution for all your web needs, utilizing cutting-edge
                technology to optimize efficiency,productivity,and success.
              </p>
              <div className="d-flex mt-4">
                <button className="HeaderButton">
                 Web App Services
                </button>
              </div>
            </div>
          </div>
          <div className="width50">
          <img src={data} alt="Computer man" />
          </div>
        </div>

        <div className="background2">
        <div style={{ color: "#ffffff" }} className="width50 d-flex">
            <div className="col-lg-3 col-sm-3 col-md-3"></div>
            <div>
              <h1 className="mb-4">
                <b>
                  Streamline Your Mobile Application with Our Cutting-Edge All-In-One
                  Solutions.
                </b>
              </h1>
              <p>
                Our Mobile Application Development Service provide a comprehensive
                solution for all your Mobile Application needs, utilizing cutting-edge
                technology to optimize efficiency,productivity,and success.
              </p>
              <div className="d-flex mt-4">
                <button className="HeaderButton">
                Mobile App Services
                </button>
              </div>
            </div>
          </div>
          <div className="width50">
          <img src={slider2} alt="Computer man" />
          </div>
        </div>
        {/* <div className="background3">
        <div style={{ color: "#ffffff" }} className="width50 d-flex">
            <div className="col-lg-3 col-sm-3 col-md-3"></div>
            <div>
              <h1 className="mb-4">
                <b>
                  Streamline Your Web App with Our Cutting-Edge All-In-One
                  Solutions.
                </b>
              </h1>
              <p>
                Our Web Application Development Service provide a comprehensive
                solution for all your web needs, utilizing cutting-edge
                technology to optimize efficiency,productivity,and success.
              </p>
              <div className="d-flex mt-4">
                <button className="HeaderButton">
                 Web App Services
                </button>
              </div>
            </div>
          </div>
          <div className="width50">
          <img src={data} alt="Computer man" />
          </div>
        </div> */}
      </Slider>
    </div>
  );
}

export default AutoPlay;
