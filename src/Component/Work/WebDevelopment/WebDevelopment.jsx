import { useNavigate } from "react-router-dom";
import picture from "../../../Images/Mobile.jpg"
import LeftSideExploreMore from "../../../Global/LeftSideExploreMore";
import ExploreMore from "../../../Global/ExploreMore";
import Heading from "../../../Global/Heading";

function WebDevelopment() {
  const navigate = useNavigate();

  const handleController = () => {
    navigate('/Home');
  };
  return (
    <div>
      <Heading
        visible={false}
        text="Web Development Portfolio"
        paragraph="Discover our expertise in web application development with our portfolio showcasing diverse projects and satisfied clients. Let us help bring your vision to life with cutting-edge technology and personalized solutions."
      />
        <LeftSideExploreMore
        handleController={handleController}
        heading="Tagmarshal"
        heading2="– Enhancing Golf Course Pace of Play."
        subheading="This platform is designed to revolutionize golf operations and pace-of-play management by harnessing real-time data insights. Tagmarshal optimizes golf course operations and creates an enhanced experience for players. Built using a powerful combination of Laravel, Vue.js, AWS, Element UI, MongoDB, Node.js, and React, Tagmarshal offers a comprehensive and innovative solution."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <ExploreMore 
        handleController={handleController}
        heading="Cloud9"
        heading2="– Your Ultimate App for Curating Spotify Music Playlists"
        subheading="Built with MERN stack, this app allows users to create and manage playlists to enhance their Spotify music experience. With Cloud 9, users have the option to play their tracks multiple times to boost their streaming statistics. Elevate your music curation game with Cloud 9 and create playlists that resonate with your unique taste. Join the Cloud 9 community and take your Spotify music journey to new heights."
        picture={picture}
        visible={false}
        secondbutton="Visit Live Site"
      />
      <LeftSideExploreMore
        handleController={handleController}
        heading="Fika"
        heading2="– Your Ultimate App for Curating Spotify Music Playlists"
        subheading="Experience the fusion of innovation and craftsmanship with a wide array of stunning designs to complement your style. Fika, built with WordPress and ReactJS, brings your imagination to life, turning your old walls into captivating works of art. Discover the perfect blend of aesthetics and creativity and adorn your space with adorable art pieces"
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <ExploreMore
        handleController={handleController}
        heading="Neuro Ascent"
        heading2="– A Comprehensive Learning Platform for Healthcare Students"
        subheading="With a focus on delivering an immersive learning experience, this web app is built using cutting-edge technologies such React.js, Three.js, JavaScript, Python, Django, and MySQL, this platform offers a robust and dynamic learning environment. Elevate your healthcare education with this web app and explore the fascinating world of cranial, spine, and neuroanatomy like never before."
        picture={picture}
        secondbutton="Visit Live Site"
        visible={false}
      />
    </div>
  );
}

export default WebDevelopment;
