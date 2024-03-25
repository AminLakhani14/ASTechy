import { useNavigate } from "react-router-dom";
import ExploreMore from "../../Global/ExploreMore";
import Heading from "../../Global/Heading";
import picture from "../../Images/Mobile.jpg";
import { useState } from "react";
import LeftSideExploreMore from "../../Global/LeftSideExploreMore";
import Cities from "../../Global/Cities";
import Footer from "../../Global/Footer";
import Service from "../Services/Service";
import Navbar from "../NavBar/NavBar";
import CustomCarousel from "../CustomSlider/CustomSlider";
import images from "../../Images/sliderData";
import TechnologyStack from "../Technologies/OurTechStack";
import Feedback from "../../Global/Feedback";
import OurClient from "../Our Client/OurClient";
import AutoPlay from "../../Global/DCSlider";
// import { Accordion } from "../../Global/FAQ";

function Home() {
  const navigate = useNavigate();

  const handleController = () => {
    navigate("/");
  };
  return (
    <div>
      
        <AutoPlay />
      <Service />
      <div className="pt-4 mt-5 pb-5" style={{backgroundColor:"#F2F5F9"}}>
      <LeftSideExploreMore
        handleController={handleController}
        secondbutton={'Lets Get Started'}
        heading="Zwapifi : Ensuring a Seamless, Extraordinary Trading Experience"
        subheading="Zwapifi, developed using the React Native framework, 
        is a cutting-edge platform that aims to transform the bartering process.
         It provides a digital venue for users to trade items, ensuring fair value in return. 
         The app simplifies trading, promotes sustainability, and aids in decluttering, 
         offering a unique and seamless trading experience to the users."
        picture={picture}
      />
      </div>
      <OurClient />
      <Feedback />
      <TechnologyStack />
    </div>
  );
}

export default Home;
