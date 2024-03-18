import React from "react";
import Slider from "react-slick";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import cloud from "../Images/cloud.jpeg";
import back1 from "../Images/back1.jpg";
import back2 from "../Images/back2.jpg";
import "../CSS/DCSlider.css"
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
        <div>
          <img src={cloud} width="100%" height="100%" />
        </div>
        <div>
          <img src={back1} width="100%" height="80%" />
        </div>
        <div>
          <img src={back2} width="100%" height="100%" />
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
