import { useNavigate } from "react-router-dom";
import ExploreMore from "../../Global/ExploreMore";
import Heading from "../../Global/Heading";
import picture from "../../Images/Mobile.jpg"
import { useState } from "react";
import LeftSideExploreMore from "../../Global/LeftSideExploreMore";
import Cities from "../../Global/Cities";
import Footer from "../../Global/Footer";
import Service from "../Services/Service";
import Navbar from "../NavBar/NavBar";

function Home() {
  const [visible,setvisible] = useState(false);
  const navigate = useNavigate();

  const handleController = () => {
    navigate('/');
  };
  return (
    <div>
        {/* <Navbar /> */}
        <Service />
        <Heading visible={false} text="BlockChain Development Portfolio" paragraph="Ropstam offers top-notch blockchain development services to help businesses overcome challenges and bring their innovative ideas to life. We aim to deliver quality solutions and help clients turn their vision into successful businesses."/>
        <LeftSideExploreMore   handleController={handleController}
        heading="Zwapifi : Ensuring a Seamless, Extraordinary Trading Experience" 
        subheading="Zwapifi, developed using the React Native framework, 
        is a cutting-edge platform that aims to transform the bartering process.
         It provides a digital venue for users to trade items, ensuring fair value in return. 
         The app simplifies trading, promotes sustainability, and aids in decluttering, 
         offering a unique and seamless trading experience to the users." 
        picture={picture}/>

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
        <Cities/>
        {/* <Footer/> */}

    </div>
  );
}

export default Home;
