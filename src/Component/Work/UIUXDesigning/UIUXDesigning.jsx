import { useNavigate } from "react-router-dom";
import picture from "../../../Images/Mobile.jpg"
import LeftSideExploreMore from "../../../Global/LeftSideExploreMore";
import Heading from "../../../Global/Heading";
import Feedback from "../../../Global/Feedback";
import { useState } from "react";

function UIUXDesigning() {
  const navigate = useNavigate();

  const handleController = () => {
    navigate('/Home');
  };
  const [visible, setvisible] = useState(false);
  const [feedbackvisible, setfeedbackvisible] = useState(false);

  return (
    <div style={{overflow:'hidden'}}>
      <Heading
        visible={false}
        startedbtn={true}
        feedbackvisible={true}
        workBtn={false}
        text="UI/UX Designing Portfolio"
        paragraph="Unlock seamless digital experiences with our expert UI/UX designing services. From intuitive interfaces to engaging user journeys, our team specializes in crafting designs that prioritize user satisfaction and functionality. Elevate your digital presence with our innovative UI/UX designing solutions tailored to your unique needs."
      />
        <LeftSideExploreMore
        handleController={handleController}
        heading="DesignDynamo"
        heading2="- Crafting Intuitive UI/UX for Tagmarshal."
        subheading="Experience seamless navigation and enhanced user experience with DesignDynamo's UI/UX designs tailored for Tagmarshal. Our innovative approach revolutionizes golf course management by ensuring intuitive interfaces and smooth interactions. With expertise in Laravel, Vue.js, and React, DesignDynamo elevates Tagmarshal's solutions to deliver a comprehensive and user-friendly experience."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <LeftSideExploreMore 
        rowReverse={true} 
        handleController={handleController}
        heading="UXGenius"
        heading2="- Redefining Golf Course Management with Intuitive Design."
        subheading="Redefine golf course management with UXGenius' cutting-edge UI/UX designs for Tagmarshal. Our intuitive interfaces and user-centric approach optimize operations and enhance the pace-of-play experience for players. Leveraging Laravel, Vue.js, and AWS, UXGenius transforms Tagmarshal's real-time data insights into a visually compelling and user-friendly solution."
        picture={picture}
        visible={true}
        secondbutton="Visit Live Site"
      />
      <LeftSideExploreMore
        handleController={handleController}
        heading="InterfaceInnovate"
        heading2="- Elevating Golf Course Operations through Design."
        subheading="Elevate golf course operations with InterfaceInnovate's exceptional UI/UX designs for Tagmarshal. Our creative solutions prioritize user experience and streamline management processes, revolutionizing pace-of-play management. With expertise in Element UI, MongoDB, and Node.js, InterfaceInnovate enhances Tagmarshal's capabilities to deliver an innovative and comprehensive solution."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <LeftSideExploreMore 
        rowReverse={true}
        handleController={handleController}
        heading="UXVisionary"
        heading2="- Transforming Golf Course Experiences through Design Excellence."
        subheading="Transform golf course experiences with UXVisionary's visionary UI/UX designs for Tagmarshal. Our designs focus on enhancing user engagement and optimizing operations, creating an immersive experience for players. Powered by React, AWS, and Vue.js, UXVisionary brings Tagmarshal's innovative solutions to life with intuitive interfaces and seamless interactions."
        picture={picture}
        secondbutton="Visit Live Site"
        visible={false}
        
      />
      <Feedback/>
    </div>
  );
}

export default UIUXDesigning;
