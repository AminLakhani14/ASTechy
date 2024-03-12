import React, { Component } from "react";
import Slider from "react-slick";
import images from "../../Images/sliderData";
import "./CustomSlider.css";
import { ArrowCircleLeftRounded, ArrowCircleRightRounded } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomCarousel({ children }) {
  const settings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
      {children.map((item, index) => {
        return (
            <>
          <div
            className={"slider__item slider__item-active-" + (activeIndex + 1)}
            style={{backgroundColor:item.bgColor}}
            key={index}
          >
            {item}
          </div>
          </>
        );
      })}
      </Slider>
    </div>
  );
}

export default CustomCarousel;

// import React, { useState, useEffect } from "react";

// import "./CustomSlider.css";
// import { ArrowCircleLeftRounded, ArrowCircleRightRounded } from "@mui/icons-material";

// function CustomCarousel({ children }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [slideDone, setSlideDone] = useState(true);
//   const [timeID, setTimeID] = useState(null);

//   useEffect(() => {
//     if (slideDone) {
//       setSlideDone(false);
//       setTimeID(
//         setTimeout(() => {
//           slideNext();
//           setSlideDone(true);
//         }, 5000)
//       );
//     }
//   }, [slideDone]);

//   const slideNext = () => {
//     setActiveIndex((val) => {
//       if (val >= children.length - 1) {
//         return 0;
//       } else {
//         return val + 1;
//       }
//     });
//   };

//   const slidePrev = () => {
//     setActiveIndex((val) => {
//       if (val <= 0) {
//         return children.length - 1;
//       } else {
//         return val - 1;
//       }
//     });
//   };

//   const AutoPlayStop = () => {
//     if (timeID > 0) {
//       clearTimeout(timeID);
//       setSlideDone(false);
//     }
//   };

//   const AutoPlayStart = () => {
//     if (!slideDone) {
//       setSlideDone(true);
//     }
//   };

//   return (
//     <div
//       className="container__slider"
//       onMouseEnter={AutoPlayStop}
//       onMouseLeave={AutoPlayStart}
//     >
//       {children.map((item, index) => {
//         return (
//             <>
//           <div
//             className={"slider__item slider__item-active-" + (activeIndex + 1)}
//             style={{backgroundColor:item.bgColor}}
//             key={index}
//           >
//             {item}
//           </div>
//           </>
//         );
//       })}

//       <div className="container__slider__links">
//         {children.map((item, index) => {
//           return (
//             <button
//               key={index}
//               className={
//                 activeIndex === index
//                   ? "container__slider__links-small container__slider__links-small-active"
//                   : "container__slider__links-small"
//               }
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveIndex(index);
//               }}
//             ></button>
//           );
//         })}
//       </div>

//       <button
//         className="slider__btn-next"
//         onClick={(e) => {
//           e.preventDefault();
//           slideNext();
//         }}
//       > <ArrowCircleRightRounded fontSize="large"/>
//       </button>
//       <button
//         className="slider__btn-prev"
//         onClick={(e) => {
//           e.preventDefault();
//           slidePrev();
//         }}
//       >
//         <ArrowCircleLeftRounded fontSize="large"/>
//       </button>
//     </div>
//   );
// }

// export default CustomCarousel;
