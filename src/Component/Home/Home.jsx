import { useNavigate } from "react-router-dom";
import ExploreMore from "../../Global/ExploreMore";
import Heading from "../../Global/Heading";
// import Header from "../Header/Header";
import picture from "../../Images/Mobile.jpg"

function Home() {
  const navigate = useNavigate();

  const handleController = () => {
    navigate('/Home');
  };
  return (
    <div>
        <Heading text="BlockChain Development Portfolio" paragraph="Ropstam offers top-notch blockchain development services to help businesses overcome challenges and bring their innovative ideas to life. We aim to deliver quality solutions and help clients turn their vision into successful businesses."/>
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
    </div>
  );
}

export default Home;
