import { useState } from "react";
import { useNavigate } from "react-router";
import Heading from "../../../Global/Heading";
import picture from "../../../Images/Mobile.jpg";
import LeftSideExploreMore from "../../../Global/LeftSideExploreMore";
import Feedback from "../../../Global/Feedback";
function Wordpress() {
  const [visible, setvisible] = useState(false);
  const navigate = useNavigate();

  const handleController = () => {
    navigate("/");
  };
  return (
    <div style={{overflow:'hidden'}}>
      <Heading
        visible={false}
        startedbtn={true}
        workBtn={false}
        text="WordPress Development Portfolio"
        paragraph="Experience seamless e-commerce solutions with our expertise in WordPress development. Our portfolio showcases our ability to create custom online stores, integrate third-party plugins, and optimize website performance."
      />
      <LeftSideExploreMore
        handleController={handleController}
        heading="Appravo"
        heading2="– Your Destination for Fitness and Gym Equipment."
        subheading="As a dedicated digital store, Appravo specializes in offering a diverse array of fitness and gym equipment. Appravo provides a comprehensive range of products from home gym essentials to commercial-grade options. They aim to empower individuals to embrace healthier lifestyles by bringing exercise right to their homes. Built using the versatile platform of WordPress, Appravo’s online store ensures a user-friendly and engaging shopping experience."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <LeftSideExploreMore 
        rowReverse={true}
        handleController={handleController}
        heading="Leskoy"
        heading2="– Inspired by tradition, infused with artistry"
        subheading="LesKoy is a unique platform that offers scarves inspired by the traditional East African culture, fusing contemporary fashion with Afro-Arab and American cultural heritage. The platform, built with ReactJS and WordPress, invites individuals to explore and embrace the beauty and significance of these unique scarves, commemorating a cherished heritage."
        picture={picture}
        visible={false}
        secondbutton="Visit Live Site"
      />
      <LeftSideExploreMore
        handleController={handleController}
        heading="Tibor "
        heading2="– Your Wellness Partner for Self-Employed and SMEs"
        subheading="This app is tailored to empower individuals and enterprises to achieve personal and professional aspirations. Tibor offers personalized growth programs, audio and video coaching sessions, and goal-setting and progress-tracking tools designed to cultivate a harmonious work-life balance. Built with the synergy of WordPress, React Native, Node.js, and MongoDB, Tibor delivers a holistic and dynamic wellness experience."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <LeftSideExploreMore 
        rowReverse={true}
        handleController={handleController}
        heading="Wild Tonic"
        heading2="– A Digital Store for Unique Beverages"
        subheading="This online store offers a selection of distinct and flavorful drinks. With a commitment to quality and health, Wild Tonic presents a range of products crafted from organic ingredients and naturally fermented to elevate both taste and nutritional benefits. Built using Shopify, Liquid, and Bootstrap, Wild Tonic’s platform provides a unique shopping experience."
        picture={picture}
        secondbutton="Visit Live Site"
        visible={false}
      />
       <Feedback/>
    </div>
  );
}

export default Wordpress;
