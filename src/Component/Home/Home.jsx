import { useNavigate } from "react-router-dom";
import picture from "../../Images/Mobile.jpg";
import LeftSideExploreMore from "../../Global/LeftSideExploreMore";
import Service from "../Services/Service";
import TechnologyStack from "../Technologies/OurTechStack";
import Feedback from "../../Global/Feedback";
import OurClient from "../Our Client/OurClient";
import AutoPlay from "../../Global/DCSlider";
function Home() {
  const navigate = useNavigate();

  const handleController = () => {
    navigate("/");
  };
  return (
    <div style={{ width: '100%',overflow:'hidden' }}>
      <AutoPlay />
      <div>
        <Service />
      </div>
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
      <TechnologyStack />
      <Feedback />
    </div>
  );
}

export default Home;
