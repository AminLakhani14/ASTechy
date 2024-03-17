import { useNavigate } from "react-router-dom";
import LeftSideExploreMore from "../../../Global/LeftSideExploreMore";
import ExploreMore from "../../../Global/ExploreMore";
import Heading from "../../../Global/Heading";
import picture from "../../../Images/Mobile.jpg"
import Feedback from "../../../Global/Feedback";

function Ebook() {
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
        text="Ebook Portfolio"
        paragraph="Unlock knowledge and inspiration with our captivating Ebook collection. Dive into a world of limitless possibilities as our Ebooks cover a diverse range of topics, from personal development to professional growth. Elevate your reading experience and immerse yourself in the transformative power of our Ebook library today."
      />
        <LeftSideExploreMore
        handleController={handleController}
        heading="EbookEmpire"
        heading2="- Your Gateway to Unlimited Knowledge."
        subheading="Embark on a journey of discovery with EbookEmpire, your ultimate destination for accessing a vast array of captivating ebooks. From enriching fiction to insightful non-fiction, EbookEmpire offers a diverse collection catering to every reader's taste and interest. Immerse yourself in the world of literature and expand your horizons with EbookEmpire today."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <ExploreMore 
        handleController={handleController}
        heading="Reader'sHaven "
        heading2=" - Explore, Engage, Enlighten."
        subheading="Discover a treasure trove of knowledge and inspiration with Reader'sHaven. Our extensive ebook library is curated to cater to every reader's craving for enlightenment and entertainment. With a wide range of genres and topics to choose from, Reader'sHaven provides a seamless reading experience that will captivate and enrich your mind."
        picture={picture}
        visible={false}
        secondbutton="Visit Live Site"
      />
      <LeftSideExploreMore
        handleController={handleController}
        heading="DigitalBookshelf"
        heading2="- Where Ideas Come to Life."
        subheading="Step into a world of endless possibilities with DigitalBookshelf. Our curated collection of ebooks spans across genres, offering a wealth of knowledge and creativity at your fingertips. Whether you seek to learn, grow, or simply escape into another world, DigitalBookshelf has something for every reader. Dive into a digital realm of imagination and exploration with DigitalBookshelf today."
        picture={picture}
        secondbutton="Visit Live Site"
      />

      <ExploreMore
        handleController={handleController}
        heading="PageTurner"
        heading2="- Your Passport to Adventure and Insight."
        subheading="Embark on a literary journey like never before with PageTurner. Our ebook platform invites you to explore captivating stories, insightful guides, and thought-provoking literature from the comfort of your device. With a user-friendly interface and a vast selection of titles, PageTurner promises an immersive reading experience that will keep you turning pages for hours on end."
        picture={picture}
        secondbutton="Visit Live Site"
        visible={false}
      />
       <Feedback/>
    </div>
  );
}

export default Ebook;
