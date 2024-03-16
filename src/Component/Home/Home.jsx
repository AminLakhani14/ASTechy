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

function Home() {
  const [visible, setvisible] = useState(false);
  const [startedbtn, setStartedbtn] = useState(false);
  const navigate = useNavigate();

  const handleController = () => {
    navigate("/");
  };
  return (
    <div>
      {/* <Navbar /> */}
      <CustomCarousel>
        {images.map((item, index) => {
          return (
            <>
              <div className="row justify-content-center align-items-center sliderBg" style={{backgroundColor: item.bgColor , height:'100vh',width:'100vw'}} >
                <img className="position-absolute" key={index} src={item.imgURL} alt={item.imgAlt}></img>
                <div className="col-lg-1"></div>
                <div className="col-lg-5">
                  <h1 className="sliderHeading" key={index}>{item.heading}</h1>
                  <h5 className="slierText">{item.subHeading}</h5>{" "}
                  <button className="sliderButton mt-4">
                    <b>{item.buttonText}</b>
                  </button>
                </div>
                <div className="col-lg-5"></div>
                <div className="col-lg-1"></div>

              </div>
            </>
          );
        })}
      </CustomCarousel>
      <Service />
      {/* <Heading
        visible={false}
        startedbtn={true}
        text="BlockChain Development Portfolio"
        paragraph="Ropstam offers top-notch blockchain development services to help businesses overcome challenges and bring their innovative ideas to life. We aim to deliver quality solutions and help clients turn their vision into successful businesses."
      /> */}
      <LeftSideExploreMore
        handleController={handleController}
        heading="Zwapifi : Ensuring a Seamless, Extraordinary Trading Experience"
        subheading="Zwapifi, developed using the React Native framework, 
        is a cutting-edge platform that aims to transform the bartering process.
         It provides a digital venue for users to trade items, ensuring fair value in return. 
         The app simplifies trading, promotes sustainability, and aids in decluttering, 
         offering a unique and seamless trading experience to the users."
        picture={picture}
      />

      <ExploreMore
        handleController={handleController}
        heading="Zwapifi : Ensuring a Seamless, Extraordinary Trading Experience"
        subheading="Zwapifi, developed using the React Native framework, 
        is a cutting-edge platform that aims to transform the bartering process.
         It provides a digital venue for users to trade items, ensuring fair value in return. 
         The app simplifies trading, promotes sustainability, and aids in decluttering, 
         offering a unique and seamless trading experience to the users."
        picture={picture}
      />
      {/* <Cities /> */}
      {/* <Footer/> */}
      <Heading
        visible={false}
        startedbtn={false}
        feedbackvisible={true}
        // text="BlockChain Development Portfolio"
        paragraph="Ready to discuss your Cross-Platform App development project? Get in touch today to get started."
      />
      <TechnologyStack />
    </div>
  );
}

export default Home;
