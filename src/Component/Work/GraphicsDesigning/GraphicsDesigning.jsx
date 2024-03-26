import { useNavigate } from "react-router-dom";
import picture from "../../../Images/Mobile.jpg"
import LeftSideExploreMore from "../../../Global/LeftSideExploreMore";
import Heading from "../../../Global/Heading";
import Feedback from "../../../Global/Feedback";
import { useState } from "react";

function GraphicsDesigning() {
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
        text="Graphics Designing Portfolio"
        paragraph="Transform your brand's identity with our exceptional graphics designing services. Our team of experts specializes in creating stunning visuals that capture attention and convey your message effectively. Elevate your marketing materials and digital presence with our tailored graphics designing solutions, ensuring a cohesive and memorable brand image."
      />
        <LeftSideExploreMore
        handleController={handleController}
        heading="DesignDynamics "
        heading2="- Transforming Ideas into Visual Masterpieces."
        subheading="Experience the art of graphic design with DesignDynamics, where creativity meets functionality. Our team specializes in crafting captivating visuals for Tagmarshal, enhancing its presence in the golf course management realm. From stunning logos to eye-catching promotional materials, DesignDynamics brings Tagmarshal's innovative solutions to life with flair and finesse."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <LeftSideExploreMore 
        rowReverse={true} 
        handleController={handleController}
        heading="GraphiCrafters"
        heading2="- Crafting Graphics for Tagmarshal's Vision."
        subheading="Unlock the power of visual storytelling with GraphiCrafters, your partner in graphic design excellence. We specialize in creating impactful visuals for Tagmarshal, amplifying its message and reach in the golf course management industry. From sleek website graphics to engaging social media content, GraphiCrafters elevates Tagmarshal's brand presence with creativity and precision."
        picture={picture}
        visible={true}
        secondbutton="Visit Live Site"
      />
      <LeftSideExploreMore
        handleController={handleController}
        heading="VisualVirtuoso"
        heading2="- Elevating Golf Course Management through Design."
        subheading="Experience the synergy of design and functionality with VisualVirtuoso, your destination for top-notch graphic design services. We specialize in creating visually stunning graphics for Tagmarshal, enhancing its user interface and branding efforts. From sleek app icons to engaging marketing materials, VisualVirtuoso transforms Tagmarshal's vision into captivating visuals that resonate with audiences."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <LeftSideExploreMore 
        rowReverse={true}
        handleController={handleController}
        heading="PixelPerfection"
        heading2="- Crafting Pixel-Perfect Graphics for Tagmarshal."
        subheading="Immerse yourself in the world of flawless graphic design with PixelPerfection, your partner in creating visually stunning graphics for Tagmarshal. We specialize in crafting pixel-perfect visuals that enhance Tagmarshal's branding and user experience. From elegant infographics to attention-grabbing banners, PixelPerfection ensures that Tagmarshal's message shines through with clarity and impact."
        picture={picture}
        secondbutton="Visit Live Site"
        visible={false}
        
      />
      <Feedback/>
    </div>
  );
}

export default GraphicsDesigning;
