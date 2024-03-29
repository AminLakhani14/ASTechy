import { useNavigate } from "react-router-dom";
import LeftSideExploreMore from "../../../Global/LeftSideExploreMore";
import Heading from "../../../Global/Heading";
import picture from "../../../Images/Mobile3.jpg"
import Feedback from "../../../Global/Feedback";

function SearchEngine() {
  const navigate = useNavigate();

  const handleController = () => {
    navigate('/Home');
  };
  return (
    <div style={{overflow:'hidden'}}>
      <Heading
        visible={false}
        startedbtn={true}
        workBtn={false}
        text="SEO Portfolio"
        paragraph="Optimize your online presence with our SEO-driven web application development services. Explore our portfolio of diverse projects and delighted clients, and let us elevate your digital footprint with cutting-edge technology and personalized SEO solutions."
      />
        <LeftSideExploreMore
        handleController={handleController}
        heading="SpeedSolve"
        heading2="– Revolutionizing Customer Support Efficiency."
        subheading="Discover the ultimate solution for enhancing customer support efficiency with SpeedSolve. Our platform utilizes cutting-edge technology and real-time data insights to streamline customer interactions, resolve issues swiftly, and improve overall satisfaction. Built with a powerful blend of technologies including Django, Angular, AWS, Bootstrap, PostgreSQL, Flask, and jQuery, SpeedSolve offers a comprehensive and innovative approach to customer support."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <LeftSideExploreMore 
        rowReverse={true} 
        handleController={handleController}
        heading="TechTrack"
        heading2="– Empowering Project Management Excellence."
        subheading="Unlock the potential of project management with TechTrack, a dynamic platform designed to revolutionize project coordination and efficiency. Harnessing the latest technology and data-driven insights, TechTrack optimizes workflows, enhances team collaboration, and delivers superior project outcomes. Leveraging a robust stack including Python, React, AWS, Bootstrap, MySQL, Flask, and Redux, TechTrack offers a comprehensive solution for project management success."
        picture={picture}
        visible={false}
        secondbutton="Visit Live Site"
      />
      <LeftSideExploreMore
        handleController={handleController}
        heading="EcoServe"
        heading2="– Innovating Sustainable Energy Solutions."
        subheading="Experience the future of sustainable energy with EcoServe, a pioneering platform committed to driving environmental stewardship and energy efficiency. Leveraging advanced technology and data analytics, EcoServe optimizes energy consumption, reduces carbon footprint, and empowers users to make eco-conscious choices. Utilizing a powerful stack including Java, Angular, AWS, Materialize CSS, MongoDB, Spring Boot, and Vue.js, EcoServe offers a comprehensive solution for sustainable energy management."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <LeftSideExploreMore 
        rowReverse={true}
        handleController={handleController}
        heading="HealthHub"
        heading2="– Revolutionizing Healthcare Access."
        subheading="Transform healthcare access and delivery with HealthHub, a groundbreaking platform dedicated to improving patient care and wellness outcomes. Through innovative technology and real-time data insights, HealthHub streamlines healthcare processes, enhances patient engagement, and empowers healthcare providers to deliver personalized care. Utilizing an advanced stack including Ruby on Rails, React Native, AWS, Semantic UI, PostgreSQL, Flask, and Redux, HealthHub offers a comprehensive solution for modern healthcare needs."
        picture={picture}
        secondbutton="Visit Live Site"
        visible={false}
      />
       <Feedback/>
    </div>
  );
}

export default SearchEngine;
