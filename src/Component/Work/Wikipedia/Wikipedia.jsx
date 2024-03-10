import { useNavigate } from "react-router-dom";
import LeftSideExploreMore from "../../../Global/LeftSideExploreMore";
import ExploreMore from "../../../Global/ExploreMore";
import Heading from "../../../Global/Heading";
import picture from "../../../Images/Mobile.jpg"
import Feedback from "../../../Global/Feedback";

function Wikipedia() {
  const navigate = useNavigate();

  const handleController = () => {
    navigate('/Home');
  };
  return (
    <div>
      <Heading
        visible={false}
        text="Wikipedia Portfolio"
        paragraph="Access a wealth of knowledge and information on Wikipedia, the world's largest online encyclopedia. Explore diverse topics ranging from history and science to pop culture and current events. With its vast repository of articles, Wikipedia serves as a valuable resource for learning and research, empowering users to discover, contribute, and expand their understanding of the world."
      />
        <LeftSideExploreMore
        handleController={handleController}
        heading="WikiWorks"
        heading2="- Your Gateway to Knowledge."
        subheading="Delve into the world of golf course management with WikiWorks, your go-to resource for comprehensive information on Tagmarshal. Discover how Tagmarshal revolutionizes golf operations and enhances the pace-of-play experience for players. With real-time data insights and innovative technologies like Laravel, Vue.js, and AWS, WikiWorks provides a deep dive into Tagmarshal's cutting-edge solutions."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <ExploreMore 
        handleController={handleController}
        heading="InfoInsight"
        heading2="- Unveiling Golf Course Innovations."
        subheading="Explore the groundbreaking advancements in golf course management with InfoInsight's coverage of Tagmarshal. Learn how Tagmarshal harnesses real-time data insights to optimize golf operations and elevate the player experience. With a powerful tech stack including Laravel, Vue.js, and MongoDB, InfoInsight offers a comprehensive overview of Tagmarshal's innovative solutions."
        picture={picture}
        visible={false}
        secondbutton="Visit Live Site"
      />
      <LeftSideExploreMore
        handleController={handleController}
        heading="KnowledgeKnot"
        heading2=" - Untangling Golf Course Management."
        subheading="Unlock the secrets behind efficient golf course operations with KnowledgeKnot's exploration of Tagmarshal. Dive into how Tagmarshal leverages real-time data insights to streamline pace-of-play management and enhance player satisfaction. Powered by a robust combination of Laravel, Vue.js, and Node.js, KnowledgeKnot provides valuable insights into Tagmarshal's comprehensive solutions."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <ExploreMore
        handleController={handleController}
        heading="LearnLinx"
        heading2="- Mastering Golf Course Efficiency."
        subheading="Master the art of golf course management with LearnLinx's insights into Tagmarshal. Discover how Tagmarshal transforms golf operations through real-time data insights and innovative technologies like Laravel, Vue.js, and React. With LearnLinx's in-depth analysis, gain a deeper understanding of how Tagmarshal enhances the pace-of-play experience for players."
        picture={picture}
        secondbutton="Visit Live Site"
        visible={false}
      />
       <Feedback/>
    </div>
  );
}

export default Wikipedia;
