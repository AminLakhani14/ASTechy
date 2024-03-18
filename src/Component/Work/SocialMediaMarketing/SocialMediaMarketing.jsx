import { useNavigate } from "react-router-dom";
import picture from "../../../Images/Mobile.jpg"
import LeftSideExploreMore from "../../../Global/LeftSideExploreMore";
import ExploreMore from "../../../Global/ExploreMore";
import Heading from "../../../Global/Heading";
import Feedback from "../../../Global/Feedback";
function SocialMedia() {
  const navigate = useNavigate();

  const handleController = () => {
    navigate('/Home');
  };
  return (
    <div>
      <Heading
        visible={false}
        startedbtn={true}
        workBtn={false}
        text="Social Media Marketing Portfolio"
        paragraph="Elevate your online presence with our expert Social Media Marketing services. Our tailored strategies are designed to maximize engagement, drive traffic, and boost conversions across various social media platforms. Let us harness the power of Social Media Marketing to amplify your brand's reach and impact in the digital landscape."
      />
        <LeftSideExploreMore
        handleController={handleController}
        heading="SocialBoost"
        heading2=" - Maximizing Online Presence and Engagement."
        subheading="Unlock the potential of your brand's social media presence with SocialBoost. Our tailored strategies are crafted to enhance engagement, drive traffic, and amplify your brand's reach across various social media platforms. Utilizing innovative techniques and real-time data insights, SocialBoost delivers measurable results and ensures a dynamic online presence for your business."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <ExploreMore 
        handleController={handleController}
        heading="DigitalPulse"
        heading2=" - Accelerating Brand Visibility and Impact."
        subheading="Experience the power of social media marketing with DigitalPulse. Our comprehensive approach is designed to revolutionize your brand's visibility and impact in the digital sphere. Leveraging cutting-edge strategies and data-driven insights, DigitalPulse ensures your brand stands out amidst the online noise, driving engagement and fostering meaningful connections with your audience."
        picture={picture}
        visible={false}
        secondbutton="Visit Live Site"
      />
      <LeftSideExploreMore
        handleController={handleController}
        heading="MediaMagnet"
        heading2="- Magnetizing Social Media Presence."
        subheading="Transform your social media presence with MediaMagnet. Our innovative strategies are tailored to attract, engage, and retain your target audience across various social media platforms. With a focus on driving organic growth and maximizing brand exposure, MediaMagnet harnesses the power of social media marketing to elevate your brand's visibility and influence in the digital landscape."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <ExploreMore
        handleController={handleController}
        heading="ViralVantage"
        heading2="- Igniting Social Media Buzz."
        subheading="Ignite a viral buzz around your brand with ViralVantage. Our strategic approach to social media marketing is designed to spark conversations, drive engagement, and propel your brand to new heights of online success. Leveraging dynamic content strategies and real-time analytics, ViralVantage ensures your brand's message resonates with audiences, creating lasting connections and driving business growth."
        picture={picture}
        secondbutton="Visit Live Site"
        visible={false}
      />
       <Feedback/>
    </div>
  );
}

export default SocialMedia;
