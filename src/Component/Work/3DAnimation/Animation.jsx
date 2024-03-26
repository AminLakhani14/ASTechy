import { useNavigate } from "react-router-dom";
import picture from "../../../Images/Mobile.jpg"
import LeftSideExploreMore from "../../../Global/LeftSideExploreMore";
import Heading from "../../../Global/Heading";
import Feedback from "../../../Global/Feedback";
import { useState } from "react";

function Animation() {
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
        text="3D Animation Portfolio"
        paragraph="Experience the magic of storytelling brought to life with captivating 3D animation. Dive into immersive worlds and characters rendered with stunning realism. Let our skilled team of artists and animators transport you to new dimensions with breathtaking 3D animation."     
         />
        <LeftSideExploreMore
        handleController={handleController}
        heading="AnimationAce"
        heading2="- Bringing Golf Courses to Life in 3D."
        subheading="Immerse yourself in the world of golf course management with AnimationAce, where we specialize in creating stunning 3D animations for Tagmarshal. Experience how Tagmarshal revolutionizes golf operations and enhances the pace-of-play through captivating visuals. Utilizing cutting-edge technology and creativity, AnimationAce brings Tagmarshal's innovative solutions to life like never before."
        picture={picture}
        secondbutton="Visit Live Site"
      />
     <LeftSideExploreMore
        handleController={handleController}
        rowReverse={true}
        heading="3DPlayMasters"
        heading2="- Visualizing the Future of Golf Course Management."
        subheading="Visualize the future of golf course management with 3DPlayMasters, your premier destination for immersive 3D animations of Tagmarshal's innovative solutions. Explore how Tagmarshal optimizes golf operations and creates an enhanced experience for players through our lifelike renderings. Powered by advanced tools and expertise, 3DPlayMasters showcases Tagmarshal's revolutionary capabilities in breathtaking detail."
        picture={picture}
        visible={true}
        secondbutton="Visit Live Site"
      />
      <LeftSideExploreMore
        handleController={handleController}
        heading="CinemaSphere"
        heading2="- Elevating Golf Course Experiences Through Animation."
        subheading="Step into a world of cinematic excellence with CinemaSphere, where we specialize in crafting compelling 3D animations for Tagmarshal. Witness how Tagmarshal transforms golf course operations and enhances the pace-of-play through our visually stunning creations. With a blend of artistry and technology, CinemaSphere elevates the golf course experience to new heights."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <LeftSideExploreMore
        handleController={handleController}
        rowReverse={true}
        heading="3DVisualizePro"
        heading2="- Transforming Golf Course Management into Art."
        subheading="Experience the artistry of golf course management with 3DVisualizePro, your premier destination for high-quality 3D animations of Tagmarshal's solutions. Dive into how Tagmarshal revolutionizes golf operations and enhances player experiences through our intricate visualizations. With our expertise and attention to detail, 3DVisualizePro transforms Tagmarshal's innovations into mesmerizing works of art."
        picture={picture}
        secondbutton="Visit Live Site"
        visible={false}
        
      />
      <Feedback/>
    </div>
  );
}

export default Animation;
