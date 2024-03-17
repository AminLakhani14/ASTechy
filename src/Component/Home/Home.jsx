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
import { Accordion } from "../../Global/FAQ";

function Home() {
  const [visible, setvisible] = useState(false);
  const [startedbtn, setStartedbtn] = useState(false);
  const navigate = useNavigate();
const panels = [
  {
    label: 'Seriously, Don\'t Use Icon Fonts',
    content: 'Icons are everywhere. These "little miracle workers" (as John Hicks described them) help us reinforce meaning in the interfaces we design and build. Their popularity in web design has never been greater; the conciseness and versatility of pictograms in particular make them a lovely fit for displays large and small. But icons on the web have had their fair share of challenges.',
  },
  {
    label: 'Screen Readers Actually Read That Stuff',
    content: 'Most assistive devices will read aloud text inserted via CSS, and many of the Unicode characters icon fonts depend on are no exception. Best-case scenario, your "favorite" icon gets read aloud as "black favorite star." Worse-case scenario, it\'s read as "unpronounceable" or skipped entirely.',
  },
  {
    label: 'They Fail Poorly and Often',
    content: 'When your icon font fails, the browser treats it like any other font and replaces it with a fallback. Best-case scenario, you\'ve chosen your fallback characters carefully and something weird-looking but communicative still loads. Worse-case scenario (and far more often), the user sees something completely incongruous, usually the dreaded "missing character" glyph.',
  },
  {
    label: 'They\'re a Nightmare if You\'re Dyslexic',
    content: 'Many dyslexic people find it helpful to swap out a website\'s typeface for something like OpenDyslexic. But icon fonts get replaced as well, which makes for a frustratingly broken experience.',
  },
  {
    label: 'There\'s Already a Better Way',
    content: 'SVG is awesome for icons! It\'s a vector image format with optional support for CSS, JavaScript, reusability, accessibility and a bunch more. It was made for this sort of thing.'
  },
];
  const handleController = () => {
    navigate("/");
  };
  return (
    <div>
      {/* <Navbar /> */}
      <Accordion panels={panels} />
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
      <Heading
        visible={false}
        startedbtn={true}
        text="BlockChain Development Portfolio"
        paragraph="Ropstam offers top-notch blockchain development services to help businesses overcome challenges and bring their innovative ideas to life. We aim to deliver quality solutions and help clients turn their vision into successful businesses."
      />
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
      <Cities />
      {/* <Footer/> */}
      <TechnologyStack />
    </div>
  );
}

export default Home;
